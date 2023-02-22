import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, orden: string = 'asc'): Array<any> {

    if(args === null){
      return value
    } else{
      const newValue = value.sort((a, b) => {
        if (a[args] > b[args]) {
          return 1;
        }
        if (a[args] < b[args]) {
          return -1;
        }
        return 0;
      });

      return orden == 'asc'? newValue: newValue.reverse()
    }
  }

}
