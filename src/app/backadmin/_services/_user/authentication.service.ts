import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from 'src/app/_models/_user/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/_models/_user/AuthenticationResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = `${environment.apiBaseUrl}`
  authenticationRequest  : AuthenticationRequest = new AuthenticationRequest(); 
  authenticationResponse  : AuthenticationResponse = new AuthenticationResponse(); 
  constructor(private http:HttpClient, private router: Router) { }
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
    ,  headers: new HttpHeaders({ 'Authorization': this.authenticationResponse.token })}
    )
  }
}
