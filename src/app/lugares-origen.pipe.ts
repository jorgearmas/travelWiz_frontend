import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lugaresOrigen'
})
export class LugaresOrigenPipe implements PipeTransform {

  transform(value: number, lugares: any[]): string {

    let l: any;
    for(l of lugares){
      if(l.idlugar == value){
        return l.nombre
      }
    }
    return "No hay info";
  }

}
