import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VitrineLayoutComponent } from './vitrine-layout/vitrine-layout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PdfextractorComponent } from './pdfextractor/pdfextractor.component';

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
{
  path :'analysisPatient',
  component:PdfextractorComponent,
 
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
