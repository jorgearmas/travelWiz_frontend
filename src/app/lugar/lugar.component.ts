import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent {
  lugar:any = {};
  lugares: any = [];

  constructor(private htpp:HttpClient)
  {
    this.buscarLugares();
  }

  //GUARDAR LUGAR
  guardarLugar(){
    let formularioValido:any = document.getElementById("lugarForm");

    if(formularioValido.reportValidity())
    {
      this.servicioGuardarLugar().subscribe((l:any) => this.actualizar(l))
    }

  }

  servicioGuardarLugar(){
    let httpOptions =
    {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.htpp.post("http://localhost:8080/lugar/guardar", this.lugar, httpOptions);
  }

  //BUSCAR LUGAR
  buscarLugares(){
    this.servicioBuscarLugares().subscribe((l:any) => this.lugares = l)
  }

  servicioBuscarLugares():Observable<any>{
    return this.htpp.get<any>("http://localhost:8080/lugar/buscar");
  }

  //ELIMINAR LUGAR
  eliminarLugar(l:any){
    this.servicioEliminarLugar(l).subscribe((l:any)=>this.actualizar(l))
  }

  servicioEliminarLugar(l:any):Observable<any>{
    return this.htpp.delete<any>("http://localhost:8080/lugar/eliminar/"+l.idlugar);
  }

  //MODIFICAR LUGAR
  modificarLugar(l:any)
  {
    this.lugar = l;
  }

  //ACTUALIZAR PAGINA
  actualizar(l:any)
  {
    this.buscarLugares();
    this.lugar = {};
  }

  //REGRESAR A BIENVENIDA
  goToBienvenida(){
    location.href="/bienvenida";
  }
}
