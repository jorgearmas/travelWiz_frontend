import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  administrador:any = {};

  constructor(private htpp:HttpClient){
  }

  login()
  {
    let formularioValido:any = document.getElementById("loginForm");
      if(formularioValido.reportValidity())
      {
        this.servicioLogin().subscribe((a:any) => this.darBienvenida(a))
      }
  }

  darBienvenida(administrador:any)
  {
    if(administrador)
    {
      let t = JSON.stringify(administrador)
      localStorage.setItem("usuario", t)
      this.administrador = {}
      location.href="/bienvenida";
    }
    else{
      alert("Usuario o password invalido.")
    }
  }

  servicioLogin()
  {
    let httpOptions =
    {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }

      return this.htpp.post("http://localhost:8080/administrador/login", this.administrador, httpOptions);
  }
}
