import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent {
  administrador: any;
  adminBase: any = {};
  mostrarFormulario: boolean = false;

  constructor(private htpp:HttpClient){
    let t = localStorage.getItem("usuario");

    if(t){
      this.administrador = JSON.parse(t);
    }
  }

  cambiarPassword(){
    this.mostrarFormulario = true;
  }

  guardarNuevaPassword(){
    let formularioValido:any = document.getElementById("passwordForm");

    if(formularioValido.reportValidity())
    {
      this.adminBase.usuario = this.administrador.usuario;
      this.adminBase.universidad = this.administrador.universidad;
      this.adminBase.nombre = this.administrador.nombre;
      this.adminBase.carnet = this.administrador.carnet;
      this.adminBase.curso = this.administrador.curso;
      this.servicioGuardarPassword().subscribe((p:any) => this.actualizar(p))
    }
  }

  servicioGuardarPassword(){
    let httpOptions =
    {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.htpp.post("http://localhost:8080/administrador/guardar", this.adminBase, httpOptions);
  }

  actualizar(p:any)
  {
    this.adminBase = {};
    alert("Contraseña guardada con éxito")
    this.mostrarFormulario = false;
  }
}
