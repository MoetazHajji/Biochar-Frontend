import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ListTimeoffComponent } from './timeoff-component/list-timeoff/list-timeoff.component';
import { AddTimeoffComponent } from './timeoff-component/add-timeoff/add-timeoff.component';
import { EditTimeoffComponent } from './timeoff-component/edit-timeoff/edit-timeoff.component';
import { ListAccountComponent } from './account-component/list-account/list-account.component';
import { EditGlobalAccountComponent } from './account-component/edit-global-account/edit-global-account.component';
import { ListAppointmentComponent } from './appointment-component/list-appointment/list-appointment.component';
import { SignInAuthenticationComponent } from './authentication-component/sign-in-authentication/sign-in-authentication.component';
import { SignUpAuthenticationComponent } from './authentication-component/sign-up-authentication/sign-up-authentication.component';
import { EditForgotPasswordAuthenticationComponent } from './authentication-component/edit-forgot-password-authentication/edit-forgot-password-authentication.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {
    path: 'product',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        component:ProductListComponent
      },
      {
        path:'add',
        component:AddProductComponent
      }
    ]
    },
    {
      path: 'auth',
      //component:AdminLayoutComponent,
      children:[
        {
          path:'sign-in',
          component:SignInAuthenticationComponent
        },
        {
          path:'sign-up',
          component:SignUpAuthenticationComponent
        }
      ]},
      {
        path: 'auth',
        component:AdminLayoutComponent,
        children:[
          {
            path:'edit-forget-password/:code',
            component:EditForgotPasswordAuthenticationComponent
          }
        ]},
    {
      path: 'timeoff',
      component:AdminLayoutComponent,
      children:[
        {
          path:'',
          component:ListTimeoffComponent
        },
        {
          path:'add',
          component:AddTimeoffComponent
        },
        {
          path:'edit',
          component:EditTimeoffComponent
        }
      ]
      },
      {
        path: 'account',
        component:AdminLayoutComponent,
        children:[
          {
            path:'',
            component:ListAccountComponent
          },          {
            path:'edit-detailled/:id',
            component:EditGlobalAccountComponent
          }
        ]
        }, 
        {
          path: 'appointment',
          component:AdminLayoutComponent,
          children:[
            {
              path:':id',
              component:ListAppointmentComponent
            }  
          ]
          }, 
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackadminRoutingModule { }
