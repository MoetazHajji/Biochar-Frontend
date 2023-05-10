import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountDto } from 'src/app/_models/_user/AccountDto';
import { Appointment } from 'src/app/_models/_user/Appointment';
import { Gender } from 'src/app/_models/_user/Gender';
import { Roles } from 'src/app/_models/_user/Roles';
import { StateRegion } from 'src/app/_models/_user/StateRegion';
import { AccountService } from '../../_services/_user/account.service';
import { Team } from 'src/app/_models/_user/Team';
import { Shift } from 'src/app/_models/_user/Shift'; 
import { UserDto } from 'src/app/_models/_user/UserDto';
import { AuthenticationService } from '../../_services/_user/authentication.service';

@Component({
  selector: 'app-edit-users-authentication',
  templateUrl: './edit-users-authentication.component.html',
  styleUrls: ['./edit-users-authentication.component.css']
})
export class EditUsersAuthenticationComponent implements OnInit {
  ListAccounts:AccountDto[]=[]; ListAccountsFilter:AccountDto[]=[]; 
  modalEditUsersModal : boolean = false ; 
  constructor(public accountService : AccountService , private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.accountService.getAll().subscribe((response) => {  
      this.ListAccounts = response.body;
      this.ListAccountsFilter = response.body;
     console.log( response); }
   ,(error) => { console.log(error); }) ;
 
 
  }
  onClickUpdateUser( account : AccountDto ): void {
    this.accountService.selectAccount  = account ; 
this.modalEditUsersModal = true ; 
  }

  fun_EditUsersModalCloseEvent($event : any ) :  void {
    this.modalEditUsersModal = $event ; 
  }

  fun_EditUsersModalUpdateEvent($event : any ) :  void {
    this.accountService.selectAccount  = $event ;
    this.authenticationService.updateRoleAndActivate(   this.accountService.selectAccount.userDto.username,
      this.accountService.selectAccount.userDto.roles, this.accountService.selectAccount.userDto.enabled).subscribe(
        (response) => {
           console.log("response");  console.log(response.body);   }
      ,(error) => { 
        console.log("error");  console.log(error);  
    }) ;
  }



  
 searchText: string ="";
 search() {
   this.ListAccounts =   this.ListAccountsFilter;
   if(this.searchText == "")
   {
     this.ListAccounts =   this.ListAccountsFilter;
     return;
   } 
   this.ListAccounts = this.ListAccounts.filter(acct => { 
     return ( 
    ((acct.firstname === null || acct.firstname === undefined)  ?   false : acct.lastname.toLowerCase().includes(this.searchText.toLowerCase()))
   ||
   ((acct.lastname === null || acct.lastname === undefined)  ?   false : acct.lastname.toLowerCase().includes(this.searchText.toLowerCase()))
   ||
   acct.id.toString().includes(this.searchText) 
   ||
   (( acct.gender=== null ||  acct.gender === undefined)  ?   false :  acct.gender.includes(this.searchText.toLowerCase()) )
   ||
   (( acct.userDto.roles=== null ||  acct.userDto.roles === undefined)  ?   false :   acct.userDto.roles.includes(this.searchText)  )
   ||
   acct.userDto.enabled.toString().includes(this.searchText.toLowerCase()) 
   ) ;
   });
 
}




}
