import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
    { name:'summary'
}
)

export class SummaryPipe implements PipeTransform{
        transform(value: string, noofCharacter:number) {
            if(value.length>noofCharacter){
                return   value.substring(0,noofCharacter)+'...'
            }
            return value
        }
}