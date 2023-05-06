import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountDto } from 'src/app/_models/_user/AccountDto';
import { Appointment } from 'src/app/_models/_user/Appointment';
import { Gender } from 'src/app/_models/_user/Gender';
import { Roles } from 'src/app/_models/_user/Roles';
import { StateRegion } from 'src/app/_models/_user/StateRegion';
import { AccountService } from '../../_services/_user/account.service';
import { Team } from 'src/app/_models/_user/Team';
import { Shift } from 'src/app/_models/_user/Shift';
import { FilterPipe } from './FilterPipe';
@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit { 
 

 ListAccounts:AccountDto[]=[];
 Listappointments : Appointment[] = [];
 modaldetailedAccount : boolean = false;
 modaldetailedAccountHR : boolean = false;
 ListAccountsFilter:AccountDto[]=[];

  constructor(public accountService : AccountService) { }

  ngOnInit(): void {
   
        this.ListAccounts = [  {id : 1, firstname:"belhsen", lastname:"bachouch"
      , cin: 10820305 , phone: 55775088 ,email: "belhsenbachouch@gmail.com", photo :  "src", 
      gender : Gender.male , state : StateRegion.Ariana,city:"el fahs",zip_code:1040,adresse : " adresse " , roles :Roles.Biologist 
    , createdAt: new Date(1990, 5, 15)   , dateOfBirth: new Date(1990, 5, 15) , hireDate:new Date(1990, 5, 15), appointments :this.Listappointments ,
  team: Team.Team_B , shift: Shift.Afternoon},
    {id : 2, firstname:"zeineb", lastname:"bachouch"
    , cin: 10820305 , phone: 55775088 ,email: "belhsenbachouch@gmail.com", photo :  "src", 
    gender : Gender.male , state : StateRegion.Ariana,city:"el fahs",zip_code:1040,adresse : " adresse " , roles :Roles.Patient 
  , createdAt:new Date(1990, 5, 15)   , dateOfBirth: new Date(1990, 5, 15) , hireDate:new Date(1990, 5, 15), appointments :this.Listappointments,
  team: Team.Team_B , shift: Shift.Day_Guard }]; 


  this.accountService.getAll().subscribe((response) => {  
     this.ListAccounts = response.body;
     this.ListAccountsFilter = response.body;
    console.log( response); }
  ,(error) => { console.log(error); }) ;


 
  }


 
 

  onClickDetailed(account : AccountDto ) :void {
    this.accountService.selectAccount = account;
    this.modaldetailedAccount = true;
   console.log("onDetalied");
 }
 detailedAccountModalCloseEvent($event : any) : void{ 
  this.modaldetailedAccount= $event ;
}
onClickDetailedHR(account : AccountDto ) :void {
  this.accountService.selectAccount = account;
  this.modaldetailedAccountHR = true;
 console.log("onDetailedHR");
}
detailedHRAccountModalCloseEvent($event : any) : void{ 
  this.modaldetailedAccountHR= $event ;
}


  onClickMail(account : AccountDto ) :void {
    this.accountService.selectAccount = account;
  console.log("onClickMail");
 }
 onClickChat(account : AccountDto ) :void {
  this.accountService.selectAccount = account;
  console.log("onClickChat");
 }






 isMenuOpened: boolean = false;

 toggleMenu(): void {
   this.isMenuOpened = !this.isMenuOpened;
 }



 searchText!: string;
 search() {
 // this.myList = this.filterPipe.transform(this.myList, this.searchText);
   // Filter the trainings array by title
   this.searchByTitle();
 
}


public searchByTitle(): void {
  // Filter the trainings array by title
  this.ListAccounts =   this.ListAccountsFilter;
  if(this.searchText == "")
  {
    this.ListAccounts =   this.ListAccountsFilter;
    return;
  } 
  this.ListAccounts = this.ListAccounts.filter(acct => { 
    return acct.firstname.toLowerCase().includes(this.searchText.toLowerCase()) 
  ||
  acct.lastname.toLowerCase().includes(this.searchText.toLowerCase()) 
  ||
  acct.email.toLowerCase().includes(this.searchText.toLowerCase()) 
  ||
  acct.phone.toString().includes(this.searchText.toLowerCase()) 
  ||
  acct.gender.includes(this.searchText.toLowerCase()) 
    ;
  });
  
} 

}
