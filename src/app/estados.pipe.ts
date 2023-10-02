import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  transform(value: number, estados: any[]): string {

    let e: any;
    for(e of estados){
      if(e.idestado == value){
        return e.valor;
      }
    }
    return "No hay información";
  }

}
