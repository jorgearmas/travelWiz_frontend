import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-consulta-usuarios',
  templateUrl: './consulta-usuarios.component.html',
  styleUrls: ['./consulta-usuarios.component.css']
})
export class ConsultaUsuariosComponent {
  usuarios: any = [];

  constructor(private htpp:HttpClient)
  {
    this.buscarUsuarios();
  }

    //BUSCAR USUARIOS
    buscarUsuarios(){
      this.servicioBuscarUsuarios().subscribe((u:any) => this.usuarios = u)
    }

    servicioBuscarUsuarios():Observable<any>{
      return this.htpp.get<any>("http://localhost:8080/usuario/buscar");
    }
}
