import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackadminComponent } from './backadmin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: '', component: SideBarComponent },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackadminRoutingModule { }
