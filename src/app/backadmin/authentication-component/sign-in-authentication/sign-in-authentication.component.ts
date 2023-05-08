import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from 'src/app/_models/_user/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/_models/_user/AuthenticationResponse';
import { AuthenticationService } from '../../_services/_user/authentication.service';
import { AuthenticationStatus } from 'src/app/_models/_user/AuthenticationStatus';
import { AccountService } from '../../_services/_user/account.service';

@Component({
  selector: 'app-sign-in-authentication',
  templateUrl: './sign-in-authentication.component.html',
  styleUrls: ['./sign-in-authentication.component.css']
})
export class SignInAuthenticationComponent implements OnInit {
  authRequest  : AuthenticationRequest = new AuthenticationRequest(); 
  authResponse  : AuthenticationResponse = new AuthenticationResponse(); 
  stateModalForgetPasswod: boolean = false; 
  stateMsgBoxAuth: boolean = false; 
  constructor( private authenticationService : AuthenticationService , private accountService : AccountService ) { }

  ngOnInit(): void {
  }
  signIn(){ 
    console.log(this.authRequest);
    this.authenticationService.login(this.authRequest).subscribe(
      (response) => { 
        this.stateMsgBoxAuth  = false ; 
        this.authResponse = response.body;
        this.authenticationService.authenticationResponse =  response.body;
        console.log(  this.authResponse );
       }
    ,(error) => { console.log("error");  console.log(error);
    this.stateMsgBoxAuth  = true ;

    this.authResponse = {     token: "", status : AuthenticationStatus.ERROR , message : "Canot Access !" } 
  }) ;
  }
  onClickForgotPassword():void{
    this.stateModalForgetPasswod = true;
  }
  closeEventstateModalForgetPasswod($event:any):void{
    this.stateModalForgetPasswod = $event;
  }
  SendEventModalForgetPasswod($event:any):void{ 
    console.log( $event);
    this.authenticationService.sendMailCode_ForgotPassword(  $event) .subscribe(
      (response) => { 
        this.stateMsgBoxAuth  = true ; 
        this.authResponse = response.body;
        console.log(  this.authResponse );
       }
    ,(error) => { console.log("error");  console.log(error);
    this.stateMsgBoxAuth  = true ;
    this.authResponse = {     token: "", status : AuthenticationStatus.ERROR , message : "Error send Mail !" } 
  }) ;
  }



  closeEventstateMsgBoxAuth($event:any):void{
    this.stateMsgBoxAuth = $event;
  }

  logout():void{
    this.authenticationService.logout ().subscribe(
      (response) => {
         console.log("response");  console.log(response.body); 
        this.authenticationService.authenticationResponse = {   token: "", status : AuthenticationStatus.ERROR , message : "Canot Access !"}; 
         }
    ,(error) => { 
      console.log("error");  console.log(error);  
  }) ; 
  }
}
