import { Component, OnInit } from '@angular/core';
import { AccountDto } from 'src/app/_models/_user/AccountDto';
import { Appointment } from 'src/app/_models/_user/Appointment';
import { Gender } from 'src/app/_models/_user/Gender';
import { Roles } from 'src/app/_models/_user/Roles';
import { Shift } from 'src/app/_models/_user/Shift';
import { StateRegion } from 'src/app/_models/_user/StateRegion';
import { Team } from 'src/app/_models/_user/Team';
import { AccountService } from '../../_services/_user/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AttachementDto } from 'src/app/_models/_user/AttachementDto';
import { AuthenticationService } from '../../_services/_user/authentication.service';
import { LocalService } from '../../_services/_user/local.service';
import { AuthenticationResponse } from 'src/app/_models/_user/AuthenticationResponse';
import { AuthenticationStatus } from 'src/app/_models/_user/AuthenticationStatus';
//http://localhost:4200/admin/account/edit-detailled/3
@Component({
  selector: 'app-edit-global-account',
  templateUrl: './edit-global-account.component.html',
  styleUrls: ['./edit-global-account.component.css']
})
export class EditGlobalAccountComponent implements OnInit {
[x: string]: any;
usernameParam!:any
  account : AccountDto = new AccountDto(); 
  Listappointments : Appointment[] = [];
   maleOption :Gender = Gender.male;
   femaleOption :Gender = Gender.female;
   selectedGenderOption: Gender = Gender.male;
  constructor(public accountService : AccountService, 
    private route: ActivatedRoute ,private authenticationService : AuthenticationService ) {
     

   }

  ngOnInit(): void { 
    // const accountDtoString =   this.localService.getData( "AccountDto"); 
   //  this.account = (  accountDtoString == null ?  new AccountDto :  JSON.parse(accountDtoString)  ) ;
   // console.log (  this.account );
   this.usernameParam = this.route.snapshot.params['username'];

   //console.log(this.usernameParam)
   this.accountService.getByUsername(this.usernameParam).subscribe((res:any)=>{  this.account = res.body;   }) ; 
  }









 

 

  onClickUpdate_Image(): void {
    console.log( "onClickUpdate_Image" );
    this.modalUploadImgAccount = true;
  }
  onClickUpdate_PersonalInformation(): void {
    console.log( "onClickUpdate_PersonalInformation" );
    this.accountService.update(this.account).subscribe((response) => {  
      console.log( response);
      var  acct =   this.authenticationService.getAccount();
      acct = this.account; 
      this.authenticationService.setAccount (acct);
     }
    ,(error) => { console.log(error); }) ;
  }


  public currentPassword! : string;
  public newPassword! : string;
  public verifyPassword! : string;
  onClickUpdate_ChangePassword(): void {
    console.log( "onClickUpdate_ChangePassword" );
    this.authenticationService.Request.username =  this.account.userDto.username;
    this.authenticationService.Request.password =  this.currentPassword;
    console.log( this.authenticationService.Request );
    this.authenticationService.updatePassword( this.authenticationService.Request ,this.newPassword).subscribe(
      (response) => {  console.log( response);this.authResponse = response.body; this.stateMsgBoxAuth  = true ;  }
    ,(error) => { console.log("error"); console.log(error); 
    this.authResponse = { token: "", status : AuthenticationStatus.ERROR , message : "Error send Mail !" };
    this.stateMsgBoxAuth  = true ;});
  }





  stateModalForgetPasswod : boolean = false;
  onClickForgotPassword():void {this.stateModalForgetPasswod = true;}
  closeEventstateModalForgetPasswod($event:any) : void {this.stateModalForgetPasswod = $event;}
  SendEventModalForgetPasswod($event:any) : void {
    this.authenticationService.sendMailCode_ForgotPassword(  $event) .subscribe(
      (response) => { 
        this.authResponse = response.body;
        this.stateMsgBoxAuth  = true ; 
       }
    ,(error) => { console.log("error");  console.log(error);
    this.authResponse = {     token: "", status : AuthenticationStatus.ERROR , message : "Error send Mail !" } ;
    this.stateMsgBoxAuth  = true ;
  }) ;
  }
authResponse : AuthenticationResponse = new AuthenticationResponse( );
stateMsgBoxAuth : boolean = false;
closeEventstateMsgBoxAuth($event:any):void{
  this.stateMsgBoxAuth =$event ;
}






    onClickUpdate_ManageContact(): void {
      console.log( "onClickUpdate_ManageContact" );
      console.log( this.account );
      this.accountService.update(this.account).subscribe((response) => {  console.log( response); }
      ,(error) => { console.log(error); }) ;
  }


  stateCard_PersonalInformation : boolean = true;
  stateCard_Change_Password : boolean = false;
  stateCard_Email_and_SMS : boolean = false;
  stateCard_ManageContact : boolean = false;
  func_PersonalInformation(): void {
    this.stateCard_PersonalInformation  = true;
    this.stateCard_Change_Password  = false;
    this.stateCard_Email_and_SMS  = false;
    this.stateCard_ManageContact  = false;
  }
  func_Change_Password(): void {
    this.stateCard_PersonalInformation  = false;
    this.stateCard_Change_Password  = true;
    this.stateCard_Email_and_SMS  = false;
    this.stateCard_ManageContact  = false;
  }
  func_Email_and_SMS(): void {
    this.stateCard_PersonalInformation  = false;
    this.stateCard_Change_Password  = false;
    this.stateCard_Email_and_SMS  = true;
    this.stateCard_ManageContact  = false;
  }
  func_ManageContact(): void {
    this.stateCard_PersonalInformation  = false;
    this.stateCard_Change_Password  = false;
    this.stateCard_Email_and_SMS  = false;
    this.stateCard_ManageContact  = true;
  }
  onClickBack ( ):void {

  }
stateRadioGenderOption:boolean = false;
  onCheckRadioGenderOptionMale ( ):void{
    this.stateRadioGenderOption = false;
    this.account.gender = Gender.male;

  }
  onCheckRadioGenderOptionFemale ( ):void{
    this.stateRadioGenderOption = true;
    this.account.gender = Gender.female;
  }



 modalUploadImgAccount:boolean = false;
  uploadImgAccountModalCloseEvent($event : any ):void{
    this.modalUploadImgAccount = $event; 
  }
  uploadImgAccountModal_OnUploadSuccessEvent($event : AttachementDto ):void{
    this.account.photo = $event.downloadURL;
    var  acct =   this.authenticationService.getAccount();
    acct.photo = this.account.photo; 
    this.authenticationService.setAccount (acct);
  }
  validateSamePassword : boolean = false
  validator():void{
    if (this.newPassword != this.verifyPassword){this.validateSamePassword = true; }
    else {this.validateSamePassword = false; } }

}
