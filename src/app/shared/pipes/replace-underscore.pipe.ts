import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceUnderscore'
})
export class ReplaceUnderscorePipe implements PipeTransform {

  /**
   *
   * @param value
   * @param args first parameter is boolean for full replace
   */
  transform(value: string, ...args: unknown[]): string {
    if (args[0]) {
      return value.replace(/_/g, ' ');
    }

    return value.replace('_', ' ');
  }

}
