import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelWiz';
  sesionIniciada:boolean = false;
  constructor(){
    let t = localStorage.getItem("usuario");
    if(t){
      this.sesionIniciada = true;
    }
    else{
      this.sesionIniciada = false;
    }
  }

  actualizarEstadoSesion() {
    const usuario = localStorage.getItem("usuario");
    this.sesionIniciada = usuario ? true : false;
  }

  logout(){
    localStorage.clear();
    this.actualizarEstadoSesion();
    location.href="#";
  }
}
