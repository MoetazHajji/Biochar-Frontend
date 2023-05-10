import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { AuthenticationService } from 'src/app/backadmin/_services/_user/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  constructor(public authenticationService : AuthenticationService) { } 

    ngOnInit() {    
    }
    logout():void{
      this.authenticationService.onlogout();
      this.authenticationService.goToComponent('/');
      }
    
}
