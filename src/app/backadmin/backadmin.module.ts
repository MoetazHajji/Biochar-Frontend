import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackadminRoutingModule } from './backadmin-routing.module';
import { BackadminComponent } from './backadmin.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    BackadminComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    BackadminRoutingModule
  ],
  bootstrap: [SideBarComponent]
})
export class BackadminModule { }
