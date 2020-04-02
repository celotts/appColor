import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/component/layout/layout.component';
import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
