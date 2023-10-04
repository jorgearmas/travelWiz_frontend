import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LugarComponent } from './lugar/lugar.component';
import { ViajeComponent } from './viaje/viaje.component';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { ConsultaUsuariosComponent } from './consulta-usuarios/consulta-usuarios.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'bienvenida', component:BienvenidaComponent },
  { path: 'lugar', component:LugarComponent},
  { path: 'viaje', component:ViajeComponent},
  { path: 'miperfil', component:MiperfilComponent},
  { path: 'consulta-usuario', component:ConsultaUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
