import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(des:string,limte:number): string {
    return des.split('').slice(0, limte).join(' ');
  }

}
