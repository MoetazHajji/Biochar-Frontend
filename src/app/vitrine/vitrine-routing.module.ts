import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VitrineLayoutComponent } from './vitrine-layout/vitrine-layout.component';

const routes: Routes = [
  { path:'' ,
  component:VitrineLayoutComponent,
  children:[
    {
      path:'',
      component:HomeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitrineRoutingModule { }
