import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PescaListComponent } from './pesca-list/pesca-list.component';
import { FormsModule } from '@angular/forms';
import { PescaAboutComponent } from './pesca-about/pesca-about.component';
import { PescaTiendaComponent } from './pesca-tienda/pesca-tienda.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PescaListComponent,
    PescaAboutComponent,
    PescaTiendaComponent,
    CarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
