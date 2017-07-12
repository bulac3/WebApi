import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyD9enOBFYGT_bfK0pgAaSx_K5XAU5XYdgU'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
