import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { DataApiService } from './services/data-api.service';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataApiService
  ],
  exports: [
    HelloWorldComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
