import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackadminRoutingModule } from './backadmin-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import {TableModule} from "primeng/table";
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    SideBarComponent,
    ProductListComponent,
    AdminLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BackadminRoutingModule,
    TableModule,
    ButtonModule
  ],
  bootstrap: [AdminLayoutComponent]
})
export class BackadminModule { }
