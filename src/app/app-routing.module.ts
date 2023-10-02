import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LugarComponent } from './lugar/lugar.component';
import { ViajeComponent } from './viaje/viaje.component';
import { MiperfilComponent } from './miperfil/miperfil.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'bienvenida', component:BienvenidaComponent },
  { path: 'lugar', component:LugarComponent},
  { path: 'viaje', component:ViajeComponent},
  { path: 'miperfil', component:MiperfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
