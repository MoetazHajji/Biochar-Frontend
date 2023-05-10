import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VitrineLayoutComponent } from './vitrine-layout/vitrine-layout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PdfextractorComponent } from './pdfextractor/pdfextractor.component';
import { GuardUserFrontService } from '../backadmin/_services/_user/guard-user-front-service';
import { TrainingsComponent } from './trainings/trainings.component';
import { MyTrainingComponent } from './my-training/my-training.component';
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
{ path:'training' ,
component:VitrineLayoutComponent,
children:[
  {
    path:'',
    component:TrainingsComponent
  }
  ,
  {
    path : 'mytraining',
    component:MyTrainingComponent
  }
]
},
{
  path :'analysisPatient',  canActivate : [GuardUserFrontService],
  component:PdfextractorComponent,
 
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
