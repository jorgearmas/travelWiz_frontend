import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent {
  viaje:any = {};
  viajes: any = [];
  estados: any = [];
  lugares: any = [];

  constructor(private htpp:HttpClient)
  {
    this.buscarViajes();
    this.buscarEstados();
    this.buscarLugares();
  }

  //GUARDAR VIAJE
  guardarViaje(){
    let formularioValido:any = document.getElementById("viajeForm");

    if(formularioValido.reportValidity())
    {
      this.servicioGuardarViaje().subscribe((v:any) => this.actualizar(v))
    }

  }

  servicioGuardarViaje(){
    let httpOptions =
    {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.htpp.post("http://localhost:8080/viaje/guardar", this.viaje, httpOptions);
  }

  //BUSCAR VIAJE
  buscarViajes(){
    this.servicioBuscarViajes().subscribe((v:any) => this.viajes = v)
  }

  servicioBuscarViajes():Observable<any>{
    return this.htpp.get<any>("http://localhost:8080/viaje/buscar");
  }

  //BUSCAR ESTADO
  buscarEstados(){
    this.servicioBuscarEstados().subscribe((e:any)=>this.estados = e)
  }

  servicioBuscarEstados():Observable<any>{
    return this.htpp.get<any>("http://localhost:8080/estado/buscar");
  }

  //BUSCAR LUGAR
  buscarLugares(){
    this.servicioBuscarLugares().subscribe((l:any)=>this.lugares = l)
  }

  servicioBuscarLugares():Observable<any>{
    return this.htpp.get<any>("http://localhost:8080/lugar/buscar");
  }

  //ELIMINAR VIAJE
  eliminarViaje(v:any){
    this.servicioEliminarViaje(v).subscribe((v:any)=>this.actualizar(v))
  }

  servicioEliminarViaje(v:any):Observable<any>{
    return this.htpp.delete<any>("http://localhost:8080/viaje/eliminar/"+v.idviaje);
  }

  //MODIFICAR VIAJE
  modificarViaje(v:any)
  {
    this.viaje = v;
  }

  //ACTUALIZAR PAGINA
  actualizar(l:any)
  {
    this.buscarViajes();
    this.viaje = {};
  }

  //REGRESAR A BIENVENIDA
  goToBienvenida(){
    location.href="/bienvenida";
  }
}
