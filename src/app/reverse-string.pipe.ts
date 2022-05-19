import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(input:string): string {
    let output =  Array.from(input).reverse().join('')
    console.log(output);

    return output;
  }

}
