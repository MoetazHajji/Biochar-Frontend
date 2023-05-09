import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TrainingAdminComponent } from './training-admin/training-admin.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { CertificateComponent } from './certificate/certificate.component';
import { DemandsComponent } from './demands/demands.component';

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
    {path :'training',
    component:AdminLayoutComponent,
    children:[
      {
        path : '',
        component:TrainingsListComponent
      },
      {
        path:'update/:title',
        component:TrainingAdminComponent
      },
      {
        path:'add',
        component:TrainingAdminComponent
      },
      {
        path:'subjects',
        component:SubjectsComponent
      },
      {
        path:'certificate/:title',
        component:CertificateComponent
      },
      {
        path:'demands',
        component:DemandsComponent
      }
    ]},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackadminRoutingModule { }
