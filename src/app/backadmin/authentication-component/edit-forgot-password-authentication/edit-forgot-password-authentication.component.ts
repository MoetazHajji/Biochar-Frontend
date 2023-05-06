import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from 'src/app/_models/_user/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/_models/_user/AuthenticationResponse';
import { AuthenticationService } from '../../_services/_user/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationStatus } from 'src/app/_models/_user/AuthenticationStatus';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './CustomValidators';

@Component({
  selector: 'app-edit-forgot-password-authentication',
  templateUrl: './edit-forgot-password-authentication.component.html',
  styleUrls: ['./edit-forgot-password-authentication.component.css']
})
export class EditForgotPasswordAuthenticationComponent implements OnInit {
  authRequest  : AuthenticationRequest = new AuthenticationRequest(); 
  authResponse  : AuthenticationResponse = new AuthenticationResponse(); 
  code!:any
  newPassword!:string;
  verifyPassword!:string;
  stateMsgBoxAuth : boolean = false ; 
  constructor( private authenticationService : AuthenticationService ,  private route: ActivatedRoute) {
    this.code = this.route.snapshot.params['code'];

   }

  ngOnInit(): void {
 
  }
send_ForgetPassword() :void {
  //console.log(this.code);console.log(this.newPassword );console.log(this.verifyPassword );
   this.authenticationService.confirmationCode( this.code  ,   this.newPassword )
    .subscribe((response) => {  
      console.log( response); 
      this.stateMsgBoxAuth  = true ; 
      this.authResponse = response.body;
    } ,(error) => { 
      this.stateMsgBoxAuth  = true ; 
      this.authResponse = {     token: "", status : AuthenticationStatus.ERROR , message : "Error Server 500" } }) ;
}
  closeEventstateMsgBoxAuth($event:any):void{
    this.stateMsgBoxAuth  = false ; 
  }
  validateSamePassword : boolean = false
  validator():void{
    if (this.newPassword != this.verifyPassword){this.validateSamePassword = true; }
    else {this.validateSamePassword = false; } }







 /* profileForm = new FormGroup(
    {
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    [CustomValidators.MatchValidator('password', 'confirmPassword')]
  );
  get passwordMatchError() {
    return (
      this.profileForm.getError('mismatch') &&
      this.profileForm.get('confirmPassword')?.touched
    );
  }*/

}