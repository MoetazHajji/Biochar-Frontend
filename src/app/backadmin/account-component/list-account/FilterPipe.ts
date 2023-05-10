import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
  })
  export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
      if (!items) return [];
      if (!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter(item => {
        return Object.keys(item).some(key => {
          const value = item[key];
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchText);
          } else if (typeof value === 'number') {
            return value.toString().includes(searchText);
          } else if (value instanceof Date) {
            return value.toISOString().includes(searchText);
          }
          return false;
        });
      });
    }
  }