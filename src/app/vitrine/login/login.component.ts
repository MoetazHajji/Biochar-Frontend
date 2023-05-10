import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from 'src/app/_models/_user/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/_models/_user/AuthenticationResponse';
import { AuthenticationStatus } from 'src/app/_models/_user/AuthenticationStatus';
import { AccountService } from 'src/app/backadmin/_services/_user/account.service';
import { AuthenticationService } from 'src/app/backadmin/_services/_user/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  stateModalForgetPasswod: boolean = false; 
  stateMsgBoxAuth: boolean = false; 
  constructor( public authenticationService : AuthenticationService , private accountService : AccountService   ) { }

  ngOnInit(): void {

  }
  signIn(){ 
    console.log(this.authenticationService.Request);
    this.authenticationService.login(this.authenticationService.Request).subscribe(
      (response) => { 
        this.stateMsgBoxAuth  = false ; 
        this.authenticationService.Response = response.body;
        this.authenticationService.Response =  response.body;
        console.log(  this.authenticationService.Response);
        this.save ( );
    
       }
    ,(error) => { console.log("error");  console.log(error);
    this.stateMsgBoxAuth  = true ;

    this.authenticationService.Response = {     token: "", status : AuthenticationStatus.ERROR , message : "Canot Access !" } 
  }) ;
  }
  save ( ) {
    this.authenticationService.clearAccount();
    this.authenticationService.clearAuthenticationResponse();
    this.authenticationService.setAuthenticationResponse(this.authenticationService.Response);
   // this.localService.removeData('AuthenticationResponse' );
   // this.localService.saveData ( 'AuthenticationResponse', JSON.stringify( this.authenticationService.Response ) );
    this.accountService.getByUsername (this.authenticationService.Request.username).subscribe(
      (response) => { 
        console.log( response .body)
        this.authenticationService.goToComponent('/');
        //this.localService.removeData('AccountDto' );
        //this.localService.saveData ( 'AccountDto', JSON.stringify( response.body ) );
        this.authenticationService.setAuthenticationResponse(this.authenticationService.Response);
        this.authenticationService.setAccount( response.body );
       }
    ,(error) => {   console.log( error ) 
  }) ;
   }
}
