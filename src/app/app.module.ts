import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LugarComponent } from './lugar/lugar.component';
import { ViajeComponent } from './viaje/viaje.component';
import { EstadosPipe } from './estados.pipe';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { LugaresOrigenPipe } from './lugares-origen.pipe';
import { LugaresDestinoPipe } from './lugares-destino.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    LugarComponent,
    ViajeComponent,
    EstadosPipe,
    MiperfilComponent,
    LugaresOrigenPipe,
    LugaresDestinoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
