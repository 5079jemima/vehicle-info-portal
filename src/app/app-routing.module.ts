import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VehicleListComponent} from "./vehicle-list/vehicle-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehicleListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
