import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from '../interfaces/phone.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<IPhone>, field:string): Array<IPhone> {
  if(!value){
    return value
  }
  if(!field){
    return value
  }
  return value.filter(phone => phone.fname.toLocaleLowerCase().includes(field) || phone.sname.toLocaleLowerCase().includes(field) || phone.number.toLocaleLowerCase().includes(field) );
  }

}
