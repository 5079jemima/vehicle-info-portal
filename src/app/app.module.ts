import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VehicleListComponent} from "./vehicle-list/vehicle-list.component";
import {VehicleFormComponent} from "./vehicle-form/vehicle-form.component";
import {DxButtonModule, DxDataGridModule, DxFormModule, DxPopupModule} from "devextreme-angular";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    HttpClientModule,
    DxFormModule,
    DxPopupModule,
    DxButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
