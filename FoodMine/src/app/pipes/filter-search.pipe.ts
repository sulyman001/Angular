import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(items: any[], input: any): any[] {
    if(input === undefined || input === '' || input === null){
        return items;
    }
    const query = String(input).toLowerCase();
    return items.filter(item =>
      Object.entries(item).some(entry => String(entry[1]).toLowerCase().includes(query))

      );

  }



}
