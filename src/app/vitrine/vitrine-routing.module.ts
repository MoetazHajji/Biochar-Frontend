import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VitrineLayoutComponent } from './vitrine-layout/vitrine-layout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { MyTrainingComponent } from './my-training/my-training.component';

const routes: Routes = [
  { path:'' ,
  component:VitrineLayoutComponent,
  children:[
    {
      path:'',
      component:HomeComponent
    }
  ]
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
{ path:'signup' ,
  component:SignupComponent,
},
{ path:'login' ,
  component:LoginComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitrineRoutingModule { }
