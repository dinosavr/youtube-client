import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countToKK'
})
export class CountToKKPipe implements PipeTransform {

  public transform(count: string): string {
    let num: number = Number(count);
    let answer: string;
    if (Math.abs(num) > 999999) {
      answer = String(parseFloat((Math.sign(num) * ((Math.abs(num) / 1000000))).toFixed(1))) + 'kk';
    } else if (Math.abs(num) > 999) {
      answer = String(parseFloat((Math.sign(num) * ((Math.abs(num) / 1000))).toFixed(1))) + 'k';
    } else {
      answer = count;
    }
    return answer;
  }

}
