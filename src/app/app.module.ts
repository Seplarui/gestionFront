import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { DataApiService } from './services/data-api.service';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import { SaveEmpresaComponent } from './components/save-empresa/save-empresa.component';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NavbarComponent,
    HomeComponent,
    ListEmpresasComponent,
    SaveEmpresaComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
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
