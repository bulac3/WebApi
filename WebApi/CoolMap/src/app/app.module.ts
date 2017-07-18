import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { BsDropdownModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { ModalModule } from "ngx-bootstrap";

import { FilterComponent } from '../components/filter.component'
import { MapComponent } from '../components/map.component'
import { ItemFormComponent } from '../components/item.form.component';

@NgModule({
  declarations: [
      AppComponent,
      FilterComponent,
      MapComponent,
      ItemFormComponent
  ],
  imports: [
      ModalModule.forRoot(),
      BsDropdownModule.forRoot(),
      ButtonsModule.forRoot(),
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,      
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyD9enOBFYGT_bfK0pgAaSx_K5XAU5XYdgU'
      })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
