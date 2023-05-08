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
//http://localhost:4200/admin/account/edit-detailled/3
@Component({
  selector: 'app-edit-global-account',
  templateUrl: './edit-global-account.component.html',
  styleUrls: ['./edit-global-account.component.css']
})
export class EditGlobalAccountComponent implements OnInit {
[x: string]: any;
idAnnoce!:any
  account : AccountDto = new AccountDto(); 
  Listappointments : Appointment[] = [];
   maleOption :Gender = Gender.male;
   femaleOption :Gender = Gender.female;
   selectedGenderOption: Gender = Gender.male;
  constructor(public accountService : AccountService, 
    private route: ActivatedRoute) {
    this.idAnnoce = this.route.snapshot.params['id']
    console.log(this.idAnnoce)
    this.accountService.getById(this.idAnnoce).subscribe((res:any)=>{ 
      this.account = res.body;   }) ;
     }

  ngOnInit(): void {
    this.account =   {id : 1, firstname:"belhsen", lastname:"bachouch"
    , cin: 10820305 , phone: 55775088 ,email: "belhsenbachouch@gmail.com", photo :  "src", 
    gender : Gender.female , state : StateRegion.Zaghouan,city:"el fahs",zip_code:1040,adresse : " adresse " ,
     roles :Roles.Biologist  , createdAt: new Date(1990, 5, 15)   , dateOfBirth: new Date(1990, 5, 15) , 
     hireDate:new Date(1990, 5, 15), appointments :this.Listappointments , team: Team.Team_B , shift: Shift.Afternoon}; 
  }





public currentPassword! : String;
public newPassword! : String;
public verifyPassword! : String;



 

 

  onClickUpdate_Image(): void {
    console.log( "onClickUpdate_Image" );
    this.modalUploadImgAccount = true;
  }
  onClickUpdate_PersonalInformation(): void {
    console.log( "onClickUpdate_PersonalInformation" );
    this.accountService.update(this.account).subscribe((response) => {  console.log( response); }
    ,(error) => { console.log(error); }) ;
  }
  onClickUpdate_ChangePassword(): void {
    console.log( "onClickUpdate_ChangePassword" );
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
   // this.modalUploadImgAccount = $event; 
  }
}
