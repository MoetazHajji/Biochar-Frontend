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
import { StockComponent } from './stock/stock.component';
import { EditStockComponent } from './stock/edit-stock/edit-stock.component';
import { DetailsProductComponent } from './product-list/details-product/details-product.component';
import { DetailsStockComponent } from './stock/details-stock/details-stock.component';
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
      },
      {
        path:'details/:id',
        component:DetailsProductComponent
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
        path:'subjects',
        component:SubjectsComponent
      }
    ]},
    {
      path :'stock',
      component:AdminLayoutComponent,
      children : [
        {
          path:'',
          component:StockComponent
        },
        {
          path:'update',
          component:EditStockComponent
        },
        {
          path:'add',
          component:AddProductComponent
        },
        {
          path:'details/:id',
          component:DetailsStockComponent
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
