import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value:{name:string, age:number}[], searchstring:string): any {
    if(value.length===0 ||searchstring==''){
      return value
    }
    let filteredData:{name:string, age:number}[]=[]
    for(let trainee of value){
      if(trainee.name===searchstring){
        filteredData.push(trainee)
      }
    }
    return filteredData
  }

}
