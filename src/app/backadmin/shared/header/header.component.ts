import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/_user/authentication.service';
import { AuthenticationStatus } from 'src/app/_models/_user/AuthenticationStatus';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService : AuthenticationService) { } 
  ngOnInit(): void { 
  }
  logout():void{
 this.authenticationService.onlogout(); 
 }
 verifyUsername() : string {
  return ( ( this.authenticationService.getAccount().userDto  === null ||  this.authenticationService.getAccount().userDto   === undefined) 
  ? "" : this.authenticationService.getAccount().userDto.username )
 }
 verifyFirstNameLastName() : string {
  var firstname =  ( ( this.authenticationService.getAccount().firstname  === null 
  ||  this.authenticationService.getAccount().firstname   === undefined) 
  ? "" : this.authenticationService.getAccount().firstname )
  var lastname =  ( ( this.authenticationService.getAccount().lastname  === null 
  ||  this.authenticationService.getAccount().lastname   === undefined) 
  ? "" : this.authenticationService.getAccount().lastname )
  return firstname +" "+ lastname;
 }
 verifySrcPhotoUser() : string {
  return( ( this.authenticationService.getAccount().photo  === null 
  ||  this.authenticationService.getAccount().photo   === undefined) 
  ? "../../../assets/images/user/user.png" : this.authenticationService.getAccount().photo )
   
 }
}
