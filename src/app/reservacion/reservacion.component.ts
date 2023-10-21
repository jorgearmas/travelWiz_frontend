import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent {
  reservaciones: any = [];

  constructor(private htpp:HttpClient)
  {
    this.buscarReservaciones();
  }

    //BUSCAR  RESERVACIONES
    buscarReservaciones(){
      this.servicioBuscarReservaciones().subscribe((r:any) => this.reservaciones = r)
    }

    servicioBuscarReservaciones():Observable<any>{
      return this.htpp.get<any>("http://localhost:8080/reservacion/buscar");
    }
}
