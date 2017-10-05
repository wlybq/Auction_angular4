import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../Objectes/Product";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Product[], field: string, kw: string): Product[] {
    if (!field || !kw) return list;
    return list.filter((product: Product) => {
      return product[field].indexOf(kw) >= 0;
    });
  }

}
