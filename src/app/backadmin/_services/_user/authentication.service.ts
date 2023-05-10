import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from 'src/app/_models/_user/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/_models/_user/AuthenticationResponse';
import { AuthenticationStatus } from 'src/app/_models/_user/AuthenticationStatus';
import { Roles } from 'src/app/_models/_user/Roles';
import { environment } from 'src/environments/environment';
import { LocalService } from './local.service';
import { AccountDto } from 'src/app/_models/_user/AccountDto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = `${environment.apiBaseUrl}`
   Request  : AuthenticationRequest = new AuthenticationRequest(); 
   Response  : AuthenticationResponse = new AuthenticationResponse(); 
  constructor(private http:HttpClient, private router: Router,private localService : LocalService) { }
  goToComponent(component:string) {this.router.navigateByUrl(component);} // eq de routerLink="child1"
  goToChildComponent(parentcomponent:string): void {     this.router.navigate([parentcomponent]);}

  register(authenticationRequest:AuthenticationRequest) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/user-service/user/auth/register`,authenticationRequest , {observe : 'response'
    ,  headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
  }
  login(authenticationRequest:AuthenticationRequest) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/user-service/user/auth/authenticate`,authenticationRequest , {observe : 'response'
    ,  headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
  }
  updatePassword( authRequest  :AuthenticationRequest,  newPassword : string ) : Observable<HttpResponse<any>> {
    return this.http.put(`${this.url}/user-service/user/auth/updatePassword/${newPassword}` ,authRequest, 
    {observe : 'response' ,  headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
  }

  //http://localhost:8099/biochar/user-service/user/auth/updateRoleAndActivate/belhsen97/Patient/true 
  updateRoleAndActivate(  username : string, role : Roles, enabled : boolean): Observable<HttpResponse<any>>{ 
    return this.http.put(`${this.url}/user-service/user/auth/updateRoleAndActivate/${username}/${role}/${enabled}` ,{}, 
    {observe : 'response' ,  headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
}



  sendMailCode_ForgotPassword(  email : string ) : Observable<HttpResponse<any>> {
    return this.http.put(`${this.url}/user-service/user/auth/sendMailCode_ForgotPassword/${email}` ,{}, 
    {observe : 'response'})
  }
  confirmationCode(  code : string ,   password : string) : Observable<HttpResponse<any>> {
    return this.http.put(`${this.url}/user-service/user/auth/confirmationCode/${code}/${password}` ,{}, 
    {observe : 'response'})
  }
  logout() : Observable<HttpResponse<any>> { 
    return this.http.post(`${this.url}/user-service/user/auth/logout` ,{}, {observe : 'response'
    ,  headers: new HttpHeaders({ 'Authorization': this.Response.token })}
    )
  }
  
 onlogout():void{
  this.localService.removeData('AuthenticationResponse' );
  this.localService.removeData('AccountDto' );
  this.  redirectToLoginBack();
  this.logout ().subscribe( (response) => {
       //console.log(response.body); 
       this.Response = {   token: "", status : AuthenticationStatus.ERROR , message : "Canot Access !"}; 
       }
  ,(error) => { 
    console.log("error");  console.log(error);  
}) ; 
}

setAuthenticationResponse( auth : AuthenticationResponse ):void{ 
  this.localService.removeData('AuthenticationResponse' );
  this.localService.saveData ( 'AuthenticationResponse', JSON.stringify( auth ) );
}
setAccount( account : AccountDto ):void{ 
  this.localService.removeData('AccountDto' );
  this.localService.saveData ( 'AccountDto', JSON.stringify( account ) );
}
clearAuthenticationResponse ( ):void {    this.localService.removeData('AuthenticationResponse' );}
clearAccount ( ):void {this.localService.removeData('AccountDto' );}
getAuthenticationResponse( ):AuthenticationResponse{
      const authenticationResponseString =   this.localService.getData( "AuthenticationResponse"); 
      const authenticationResponse = (  authenticationResponseString == null ? 
         {token: "", status : AuthenticationStatus.ERROR , message : "Canot Access !"}:  
          JSON.parse(authenticationResponseString)  ) ;
    //console.log (  authenticationResponse );
    return authenticationResponse;
}
getAccount( ):AccountDto{
   const accountDtoString =   this.localService.getData( "AccountDto"); 
   const account = (  accountDtoString == null ?  new AccountDto :  JSON.parse(accountDtoString)  ) ;
  //console.log (  account );
   return account;
}
 

  isAuthenticated(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean { 
   // console.log(state.url)  
    const pathFromRoot = route.pathFromRoot .map(route => route.url.join('/')) .join('/');
 // console.log('Full path:', pathFromRoot);
  //console.log( "Convert") ;
//  console.log( this.verifyUrl(pathFromRoot,this.pattern)) ;
   const listPermitPath =  ( ( this.getAccount().userDto  === null 
   ||  this.getAccount().userDto   === undefined) ? []  : this.getAccount( ).userDto.listPermissions ); 
   console.log( pathFromRoot );  
   for (const key in listPermitPath) {  if ( this.verifyUrl(pathFromRoot,listPermitPath[key])) {return true;} }
    return false; 
  }




  redirectToLoginBack() { this.goToComponent('/admin/auth/sign-in'); }
  redirectToFront() {  this.goToComponent('');}



   pattern = '/admin/account/edit-detailled/*';
   verifyUrl(url: string, pattern: string): boolean {
    // Convert the pattern to a regular expression.
    const regexPattern = pattern.endsWith('*') ? pattern.replace('*', '.*') : pattern;

    // Convert the pattern to a regular expression.
    const regex = new RegExp(`^${regexPattern}$`);
    //const regex = new RegExp('^' + pattern.replace('*', '\\w+') + '$');
  
    // Test if the URL matches the regular expression.
    return regex.test(url);
  }
}
