import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tipoanuncio',
  templateUrl: './tipoanuncio.component.html',
  styleUrls: ['./tipoanuncio.component.css']
})
export class TipoanuncioComponent {
  tipoanuncio:any = {};
  tipoanuncios: any = [];

  constructor(private htpp:HttpClient)
  {
    this.buscarTipoAnuncios();
  }

  //GUARDAR TIPO ANUNCIO
  guardarTipoAnuncio(){
    let formularioValido:any = document.getElementById("tipoAnuncioForm");

    if(formularioValido.reportValidity())
    {
      this.servicioGuardarTipoAnuncio().subscribe((t:any) => this.actualizar(t))
    }

  }

  servicioGuardarTipoAnuncio(){
    let httpOptions =
    {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.htpp.post("http://localhost:8080/tipoanuncio/guardar", this.tipoanuncio, httpOptions);
  }

  //BUSCAR TIPO DE ANUNCIOS
   buscarTipoAnuncios(){
    this.servicioBuscarTipoAnuncios().subscribe((t:any) => this.tipoanuncios = t)
  }

  servicioBuscarTipoAnuncios():Observable<any>{
    return this.htpp.get<any>("http://localhost:8080/tipoanuncio/buscar");
  }

    //ELIMINAR TIPO DE ANUNCIOS
    eliminarTipoAnuncio(t:any){
      this.servicioEliminarTipoAnuncio(t).subscribe((t:any)=>this.actualizar(t))
    }

    servicioEliminarTipoAnuncio(t:any):Observable<any>{
      return this.htpp.delete<any>("http://localhost:8080/tipoanuncio/eliminar/"+t.idanuncio);
    }

    //MODIFICAR ANUNCIO
    modificarTipoAnuncio(t:any)
    {
      this.tipoanuncio = t;
    }

  //ACTUALIZAR PAGINA
  actualizar(a:any)
  {
    this.buscarTipoAnuncios();
    this.tipoanuncio = {};
  }

  //GESTOR DE IMAGENES
  onImageChange(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.tipoanuncio.imagen = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
}
