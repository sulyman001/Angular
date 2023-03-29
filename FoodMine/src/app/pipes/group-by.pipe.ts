import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  transform(items: any[], property: string, value: any): any[] {
    if(value === "All" || value === ''){
      return items;
    }
    const filteredList = items.filter(item =>
      item[property].includes(value)
      );
      return filteredList;
  }

}
