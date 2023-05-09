import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from 'src/app/_models/_user/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/_models/_user/AuthenticationResponse';
import { AuthenticationService } from '../../_services/_user/authentication.service';
import { AuthenticationStatus } from 'src/app/_models/_user/AuthenticationStatus';

@Component({
  selector: 'app-sign-up-authentication',
  templateUrl: './sign-up-authentication.component.html',
  styleUrls: ['./sign-up-authentication.component.css']
})
export class SignUpAuthenticationComponent implements OnInit {
  authRequest  : AuthenticationRequest = new AuthenticationRequest(); 
  authResponse  : AuthenticationResponse = new AuthenticationResponse(); 
  stateMsgBoxAuth : boolean = false; 
  constructor( private authenticationService : AuthenticationService ) { }

  ngOnInit(): void {
  }
  signUp():void{ 
    console.log(this.authRequest);
   //this. stateMsgBoxAuth = true;
   //this.authResponse.status = AuthenticationStatus.SUCCESSFUL;
   //this.authResponse.message = "message !!!!!!"
   this.authenticationService.register(this.authRequest).subscribe(
    (response) => {     
      this.stateMsgBoxAuth  = true ; 
      this.authResponse = response.body;
      console.log(  this.authResponse );
    }
    ,(error) => {
      this.stateMsgBoxAuth  = true ; 
      this.authResponse = {     token: "", status : AuthenticationStatus.ERROR , message : "Error Server 500" } 
    }) ;
  }
   closeEventstateMsgBoxAuth($event:any):void{
    this.stateMsgBoxAuth = $event;
  }
}
