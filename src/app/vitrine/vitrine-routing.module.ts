import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VitrineLayoutComponent } from './vitrine-layout/vitrine-layout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddRequestComponent } from './add-request/add-request.component';

const routes: Routes = [
  {
    path: '',
    component: VitrineLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {path :'internship',
    component:VitrineLayoutComponent,
    children:[
      {
        path : 'add-request',
        component:AddRequestComponent
      }
    ]},
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitrineRoutingModule { }
