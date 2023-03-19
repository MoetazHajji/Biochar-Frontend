import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackadminRoutingModule } from './backadmin-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


@NgModule({
  declarations: [
    SideBarComponent,
    ProductListComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    BackadminRoutingModule
  ],
  bootstrap: [AdminLayoutComponent]
})
export class BackadminModule { }
