import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PescaTiendaComponent } from './pesca-tienda/pesca-tienda.component';
import { PescaAboutComponent } from './pesca-about/pesca-about.component';

const routes: Routes = [
  {
    path: '',//path raiz
    redirectTo: 'compras',
    pathMatch: 'full'
  },
  {
    path: 'compras',
    component: PescaTiendaComponent
  },
  {
    path: 'about',
    component: PescaAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
