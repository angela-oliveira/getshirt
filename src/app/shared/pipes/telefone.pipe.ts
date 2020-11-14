import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonePipe'
})
export class TelefonePipe implements PipeTransform {
  transform(value: string, ): string {
    if (value && value.length === 11) {
      return `${value.substr(0, 0)}(${value.substr(0, 2)})${value.substr(3, 5)}-${value.substr(5, 5)}`;
    }
    return value;
  }

}
