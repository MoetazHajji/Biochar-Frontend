import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  {path: '', component:SideBarComponent},
  {
    path: 'product',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        component:ProductListComponent
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
