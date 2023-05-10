import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/_user/authentication.service';
import { AuthenticationStatus } from 'src/app/_models/_user/AuthenticationStatus';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }
  verifyUsername() : string {
    return ( ( this.authenticationService.getAccount().userDto  === null ||  this.authenticationService.getAccount().userDto   === undefined) 
    ? "" : this.authenticationService.getAccount().userDto.username )
   }
}
