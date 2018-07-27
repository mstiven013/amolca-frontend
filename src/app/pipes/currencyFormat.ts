import { PipeTransform, Injectable, Pipe } from '@angular/core';
@Pipe({
  name: 'replaceCurrencySeparator'
})
@Injectable()
export class ReplacePipe implements PipeTransform {
  constructor(){}
  transform(item: any, replace, replacement): any {
    if(item == null) return "";
    item = item.replace(new RegExp(replace, 'g'), replacement);
    return item;
  }
}