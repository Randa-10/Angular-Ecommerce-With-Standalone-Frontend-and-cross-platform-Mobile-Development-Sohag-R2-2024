import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {
  transform(value:number,discount:number):number  {
    let dis=discount/100 
    let valueAfterMul=value*dis  
    let finalValue=value-valueAfterMul
    return finalValue;
  }

}
