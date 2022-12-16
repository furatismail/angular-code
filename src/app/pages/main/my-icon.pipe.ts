import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myIcon'
})
export class MyIconPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case true:
        return "done";
      case false: 
        return "close";
      default:
        return;
    }
  }

}
