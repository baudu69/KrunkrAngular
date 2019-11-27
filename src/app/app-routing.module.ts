import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisiteComponent} from './visite/visite.component';


const routes: Routes = [
  { path: 'visite', component: VisiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
