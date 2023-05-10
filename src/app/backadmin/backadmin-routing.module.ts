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
import { SampleListComponent } from './sample-list/sample-list.component';
import { ListTimeoffComponent } from './timeoff-component/list-timeoff/list-timeoff.component';
import { AddTimeoffComponent } from './timeoff-component/add-timeoff/add-timeoff.component';
import { EditTimeoffComponent } from './timeoff-component/edit-timeoff/edit-timeoff.component';
import { ListAccountComponent } from './account-component/list-account/list-account.component';
import { EditGlobalAccountComponent } from './account-component/edit-global-account/edit-global-account.component';
import { ListAppointmentComponent } from './appointment-component/list-appointment/list-appointment.component';
import { SignInAuthenticationComponent } from './authentication-component/sign-in-authentication/sign-in-authentication.component';
import { SignUpAuthenticationComponent } from './authentication-component/sign-up-authentication/sign-up-authentication.component';
import { EditForgotPasswordAuthenticationComponent } from './authentication-component/edit-forgot-password-authentication/edit-forgot-password-authentication.component';

import { TestresultListComponent } from './testresult-list/testresult-list.component';
import { AddTesttComponent } from './tests/add-testt/add-testt.component';
import { TestsComponent } from './tests/tests.component';
import { TrainingAdminComponent } from './training-admin/training-admin.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { CertificateComponent } from './certificate/certificate.component';
import { DemandsComponent } from './demands/demands.component';
import { PanierComponent } from './order/panier/panier.component';
import { OrderComponent } from './order/order.component';
import { DetailsOrderComponent } from './order/details-order/details-order.component';
import { OfferComponent } from './offer/offer.component';
import { MidcalcardListComponent } from './midcalcard-list/midcalcard-list.component';
import { AddMedicalcardComponent } from './midcalcard-list/add-medicalcard/add-medicalcard.component';
import { UpdateSampleComponent } from './sample-list/update-sample/update-sample.component';
import { UpdateMedicalcardComponent } from './midcalcard-list/update-medicalcard/update-medicalcard.component';
import { PdfextractorComponent } from './testresult-list/pdfextractor/pdfextractor.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';
import { DetailsProductComponent } from './product-list/details-product/details-product.component';
import { StockComponent } from './stock/stock.component';
import { EditStockComponent } from './stock/edit-stock/edit-stock.component';
import { DetailsStockComponent } from './stock/details-stock/details-stock.component';
import { AddTestresultComponent } from './testresult-list/add-testresult/add-testresult.component';
import { AnalysisStatistiqueComponent } from './analysis-statistique/analysis-statistique.component';
import { UpdateTesttComponent } from './tests/update-testt/update-testt.component';

import { GuardUserBackService } from './_services/_user/guard-user.service';
import { EditUsersAuthenticationComponent } from './authentication-component/edit-users-authentication/edit-users-authentication.component';
import { InternshipRequestComponent } from './internship-request/internship-request.component';
import { InternshipListComponent } from './internship-list/internship-list.component';
import { AddtestComponent } from './addtest/addtest.component';
import { DashbordComponent } from './dashbord/dashbord.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent /*canActivate : [GuardUserService],*/ },
  {
    path: 'product',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        component:ProductListComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      },
      {
        path: 'details/:id',
        component: DetailsProductComponent
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
        },
        {
          path: 'details/:id',
          component: DetailsProductComponent
        }
      ]
    },
    {
      path: 'workSchedule',
      component: AdminLayoutComponent,
      children: [
        {
          path: '',
          component: WorkScheduleComponent
        }]
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
    {path :'training',
    component:AdminLayoutComponent,
    children:[
      {
        path : '',
        component:TrainingsListComponent
      },
      {
        path:'add',
        component:TrainingAdminComponent
      },
      {
        path: 'updateProfile',
        component: EditProfileComponent
      },
      {
        path: 'details/:id',
        component: DetailsProductComponent
      }
    ]},    
  {
    path: 'training',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: TrainingsListComponent
      },
      {
        path: 'add',
        component: TrainingAdminComponent
      },
      {
        path: 'subjects',
        component: SubjectsComponent
      }
    ]
  },
  {
    path: 'stock',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: StockComponent
      },
      {
        path: 'update',
        component: EditStockComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      },
      {
        path: 'details/:id',
        component: DetailsStockComponent
      }
    ]
  },
  {
    path: 'testr',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: TestresultListComponent
      },
      {
        path: 'add',
        component: AddTestresultComponent
      }
    ]
  },
  {
    path: 'stat',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: AnalysisStatistiqueComponent
      }
    ]
  },
  {
    path: 'panier',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      component: PanierComponent
    }]
  },
  {
    path: 'order',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      component: OrderComponent
    },
    {
      path: 'details/:id',
      component: DetailsOrderComponent
    }
    ]
  },
  {
    path: 'offer',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      component: OfferComponent
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
          },
          {
            path:'edit-users',
            component:EditUsersAuthenticationComponent
          }
        ]},
    {
      path: 'timeoff' , canActivateChild : [GuardUserBackService], 
      component:AdminLayoutComponent,
      children:[
        {
          path:'' , 
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
        path: 'account', canActivateChild : [GuardUserBackService], 
        component:AdminLayoutComponent,
        children:[
          {
            path:'list',
            component:ListAccountComponent
          },          {
            path:'edit-detailled/:username',
            component:EditGlobalAccountComponent
          },
          {
            path:'pdf',
            component:PdfextractorComponent
          }
        ]
      },
      {
        path :'medicallist',
        component:AdminLayoutComponent,
        children : [
          {
            path:'',
            component:MidcalcardListComponent
          },
          {
            path:'add',
            component:AddMedicalcardComponent
          },
          {
            path:'update',
            component:UpdateMedicalcardComponent
          }
        ]
      },
      {
        path:'demands',
        component:DemandsComponent
      },
    
    {
      path: 'samplelist',
      component: AdminLayoutComponent,
      children: [
        {
          path: '',
          component: SampleListComponent
        },
        {
          path: 'add',
          component: AddMedicalcardComponent
        },
        {
          path: 'update',
          component: UpdateSampleComponent
        }
      ]
    },
  {
    path: 'testList',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: TestsComponent
      },
      {
        path: 'add',
        component: AddTesttComponent
      },
      {
        path: 'update',
        component: UpdateTesttComponent
      }
    ]
  },
  {
    path: 'appointment',
    component: AdminLayoutComponent,
    children: [
      {
        path: ':id',
        component: ListAppointmentComponent
      }
    ]
  },

  {
    path: 'stat',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: AnalysisStatistiqueComponent
      }
    ]
  },
  {path :'internship',
    component:AdminLayoutComponent,
    children:[
      {
        path : 'request',
        component:InternshipRequestComponent
      },
      {
        path : 'list',
        component:InternshipListComponent
      },
    ]
  },
  {
    path: 'dashbord',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: DashbordComponent
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
