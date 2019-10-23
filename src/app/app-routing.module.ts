import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import { SaveEmpresaComponent } from './components/save-empresa/save-empresa.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello', component: HelloWorldComponent },
  { path: 'listEmpresas', component: ListEmpresasComponent },
  { path: 'saveEmpresa', component: SaveEmpresaComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
