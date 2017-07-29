import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  // 任務 13：自訂 Pipe 元件 Step2.
  transform(value: any[], filterType?: any): any {
    switch (filterType) {
      case 'Active':
      return value.filter(item=>!item.done);
      case 'Completed':
      return value.filter(item=>item.done);
      case 'Active':
      return value.filter(item=>!item.done);

      default:
      return value;
    }
  }
}
