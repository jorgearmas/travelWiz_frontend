import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})

export class BienvenidaComponent
{
  usuarios:any = [];
  usuario:any = {};
  estados:any = [];
  constructor(private htpp:HttpClient)
  {
    this.buscarUsuarios();
    this.buscarEstados();
  }

  buscarUsuarios(){
    this.servicioBuscarUsuarios().subscribe((u:any)=>this.usuarios = u)
  }

  servicioBuscarUsuarios():Observable<any>
  {
    return this.htpp.get<any>("http://localhost:8080/usuario/buscar");
  }

  crearUsuario(){

    let formularioValido:any = document.getElementById("usuarioForm");
    if(formularioValido.reportValidity()){
      this.usuario.fechaCreacion = new Date();
      this.servicioGuardar().subscribe(
        (u:any) => this.actualizar(u)
      )
    }
  }

  modificar(u:any)
  {
    this.usuario = u;
  }

  actualizar(u:any)
  {
    this.buscarUsuarios();
    this.usuario = {};
  }

  servicioGuardar()
  {
    let httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
  }

  return this.htpp.post(
    "http://localhost:8080/usuario/guardar", this.usuario, httpOptions);
  }


  buscarEstados(){
    this.servicioBuscarEstados().subscribe((u:any)=>this.estados = u)
  }

  servicioBuscarEstados():Observable<any>{
    return this.htpp.get<any>("http://localhost:8080/estado/buscar");
  }

  eliminar(u:any){
    this.eliminarUsuario(u).subscribe(
      (u:any)=>this.actualizar(u)
    )
  }

  eliminarUsuario(u:any):Observable<any>{
    return this.htpp.delete<any>("http://localhost:8080/usuario/eliminar/"+u.idusuario);
  }

  limiarFormulario(){
    this.usuario = {};
  }

  goToLugar(){
    location.href="/lugar";
  }

  goToViaje(){
    location.href="/viaje";
  }
}
