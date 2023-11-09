import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent {
  anuncio:any = {};
  anuncios: any = [];
  tipoanuncios: any = [];

  constructor(private htpp:HttpClient)
  {
    this.buscarAnuncios();
    this.buscarTipoAnuncios();
  }

  //GUARDAR ANUNCIO
  guardarAnuncio(){
    let formularioValido:any = document.getElementById("anuncioForm");

    if(formularioValido.reportValidity())
    {
      this.servicioguardarAnuncio().subscribe((a:any) => this.actualizar(a))
    }

  }

  servicioguardarAnuncio(){
    let httpOptions =
    {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.htpp.post("http://localhost:8080/anuncio/guardar", this.anuncio, httpOptions);
  }

  //BUSCAR ANUNCIOS
  buscarAnuncios(){
    this.servicioBuscarAnuncios().subscribe((a:any) => this.anuncios = a)
  }

  servicioBuscarAnuncios():Observable<any>{
    return this.htpp.get<any>("http://localhost:8080/anuncio/buscar");
  }

   //ELIMINAR ANUNCIOS
   eliminarAnuncio(a:any){
    this.servicioEliminarAnuncio(a).subscribe((a:any)=>this.actualizar(a))
  }

  servicioEliminarAnuncio(a:any):Observable<any>{
    return this.htpp.delete<any>("http://localhost:8080/anuncio/eliminar/"+a.idanuncio);
  }

  //MODIFICAR ANUNCIO
  modificarAnuncio(a:any)
  {
    this.anuncio = a;
  }

  //ACTUALIZAR PAGINA
  actualizar(a:any)
  {
    this.buscarAnuncios();
    this.anuncio = {};
  }

  //GESTOR DE IMAGENES
  onImageChange(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.anuncio.imagen = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

    //BUSCAR TIPO DE ANUNCIOS
    buscarTipoAnuncios(){
      this.servicioBuscarTipoAnuncios().subscribe((t:any) => this.tipoanuncios = t)
    }

    servicioBuscarTipoAnuncios():Observable<any>{
      return this.htpp.get<any>("http://localhost:8080/tipoanuncio/buscar");
    }
}
