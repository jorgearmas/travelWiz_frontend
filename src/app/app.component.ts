import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'travelWiz';
  sesionIniciada:boolean = false;

  constructor(private router: Router){
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

  isOnHomePage(): boolean {
    return this.router.url === '/';
  }

  logout(){
    localStorage.clear();
    this.actualizarEstadoSesion();
    location.href="#";
  }
}
