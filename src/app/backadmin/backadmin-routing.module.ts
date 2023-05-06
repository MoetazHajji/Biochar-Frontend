import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AnalysisStatistiqueComponent } from './analysis-statistique/analysis-statistique.component';
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

import { TestresultListComponent } from './testresult-list/testresult-list.component';
import { AddTesttComponent } from './tests/add-testt/add-testt.component';
import { TestsComponent } from './tests/tests.component';
import { TrainingAdminComponent } from './training-admin/training-admin.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { StockComponent } from './stock/stock.component';
import { EditStockComponent } from './stock/edit-stock/edit-stock.component';
import { DetailsProductComponent } from './product-list/details-product/details-product.component';
import { DetailsStockComponent } from './stock/details-stock/details-stock.component';
import { UpdateTesttComponent } from './tests/update-testt/update-testt.component';
import { AddTestresultComponent } from './testresult-list/add-testresult/add-testresult.component';
import { PanierComponent } from './order/panier/panier.component';
import { OrderComponent } from './order/order.component';
import { DetailsOrderComponent } from './order/details-order/details-order.component';
import { OfferComponent } from './offer/offer.component';
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
      },
      {
        path: 'details/:id',
        component: DetailsProductComponent
      }
    ]
  },
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
      path:'panier',
      component:AdminLayoutComponent,
      children:[{
        path:'',
        component:PanierComponent
      }]
    },
    {
      path:'order',
      component:AdminLayoutComponent,
      children:[{
        path:'',
        component:OrderComponent
      },
      {
        path:'details/:id',
        component:DetailsOrderComponent
      }
    ]
    },
    {
      path:'offer',
      component:AdminLayoutComponent,
      children:[{
        path:'',
        component:OfferComponent
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
