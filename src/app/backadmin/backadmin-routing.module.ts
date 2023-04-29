import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { LeaveAuthorizationComponent } from './leave-authorization/leave-authorization.component';
import { AddLeaveAuthComponent } from './leave-authorization/add-leave-auth/add-leave-auth.component';
import { EditLeaveAuthComponent } from './leave-authorization/edit-leave-auth/edit-leave-auth.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'product',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      }
    ]
  },
  {
    path: 'profile',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: ProfileComponent
      },
      {
        path: 'addProfile',
        component: AddProfileComponent
      },
      {
        path: 'updateProfile',
        component: EditProfileComponent
      }
    ]
  },
  {
    path: 'leaveAuth',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: LeaveAuthorizationComponent
      },
      {
        path: 'addLeaveAuth',
        component: AddLeaveAuthComponent
      },
      {
        path: 'updateLeaveAuth',
        component: EditLeaveAuthComponent
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackadminRoutingModule { }
