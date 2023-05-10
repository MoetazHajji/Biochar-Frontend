import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardUserBackService } from './backadmin/_services/_user/guard-user.service';
import { GuardUserFrontService } from './backadmin/_services/_user/guard-user-front-service';
import { LoginComponent } from './vitrine/login/login.component';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GuardUserBackService,GuardUserFrontService],
  bootstrap: [AppComponent]
})
export class AppModule { }
