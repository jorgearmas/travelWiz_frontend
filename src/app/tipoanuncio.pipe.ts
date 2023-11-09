import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoanuncio'
})
export class TipoanuncioPipe implements PipeTransform {

  transform(value: number, tipoanuncios: any[]): string {

    let t: any;
    for(t of tipoanuncios){
      if(t.idtipoanuncio == value){
        return t.descripcion
      }
    }
    return "No hay info";
  }

}
