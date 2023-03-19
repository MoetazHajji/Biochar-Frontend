import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitrineRoutingModule } from './vitrine-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    VitrineRoutingModule
  ]
})
export class VitrineModule { }
