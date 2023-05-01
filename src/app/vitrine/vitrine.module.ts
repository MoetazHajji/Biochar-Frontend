import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitrineRoutingModule } from './vitrine-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VitrineLayoutComponent } from './vitrine-layout/vitrine-layout.component';
import { SignupComponent } from './signup/signup.component';
import { NavBarAuthComponent } from './nav-bar-auth/nav-bar-auth.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    VitrineLayoutComponent,
    SignupComponent,
    NavBarAuthComponent
  ],
  imports: [
    CommonModule,
    VitrineRoutingModule
  ]
})
export class VitrineModule { }
