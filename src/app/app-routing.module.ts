import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./backadmin/backadmin.module').then(m => m.BackadminModule) },
  { path: '', loadChildren: () => import('./vitrine/vitrine.module').then(m => m.VitrineModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
