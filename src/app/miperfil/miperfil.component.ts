import { Component } from '@angular/core';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent {
  usuario: any;

  constructor(){
    let t = localStorage.getItem("usuario");

    if(t){
      this.usuario = JSON.parse(t);
    }


  }
}
