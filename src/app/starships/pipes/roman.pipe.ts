import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class romanPipe implements PipeTransform {

  transform(num: number) {
    if (isNaN(num)) return NaN;
    const lookup: any = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    let roman: string = '', i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
  }

}
