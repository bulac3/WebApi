import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { BsDropdownModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';

import { CategoryFilterComponent } from '../components/categoryFilter.component'
import { MapComponent } from '../components/map.component'
import { ModalModule } from "ngx-bootstrap";

@NgModule({
  declarations: [
      AppComponent,
      CategoryFilterComponent,
      MapComponent
  ],
  imports: [
      ModalModule.forRoot(),
      BsDropdownModule.forRoot(),
      ButtonsModule.forRoot(),
      BrowserModule,
      FormsModule,
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
