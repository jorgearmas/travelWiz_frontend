import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lugaresDestino'
})
export class LugaresDestinoPipe implements PipeTransform {

  transform(value: number, lugares: any[]): string {
    let l: any;
    for(l of lugares){
      if(l.idlugar == value){
        return l.nombre
      }
    }
    return "No hay información";
  }

}
