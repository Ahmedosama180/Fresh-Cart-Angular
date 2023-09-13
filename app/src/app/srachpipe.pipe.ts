import { Pipe, PipeTransform } from '@angular/core';
import { Proudact } from './proudact';

@Pipe({
  name: 'srachpipe'
})
export class SrachpipePipe implements PipeTransform {

  transform(product:Proudact[],searcchtearm:string): Proudact[] {
    return product.filter((product)=>product.title.toLocaleLowerCase().includes(searcchtearm.toLocaleLowerCase()))
  }

}
