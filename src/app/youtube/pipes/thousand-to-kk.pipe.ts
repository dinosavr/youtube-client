import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandToKK'
})
export class ThousandToKKPipe implements PipeTransform {

  public transform(count: string): string {
    let million: number;
    let thousand: number;
    let numberAfterPoint: number;
    let millionToShortStr: string;
    let thousandToShortStr: string;
    let answer: string;
    let isMoreOrEqualMillion: Boolean;
    let isMoreOrEqualThousand: Boolean;

    million = 1000000;
    thousand = 1000;
    numberAfterPoint = 1;
    millionToShortStr = 'kk';
    thousandToShortStr = 'k';
    let num: number = Number(count);
    isMoreOrEqualMillion = Math.abs(num) >= million;
    isMoreOrEqualThousand = Math.abs(num) >= thousand;

    switch (true) {
      case isMoreOrEqualMillion:
        answer = (Math.sign(num) * ((Math.abs(num) / million))).toFixed(numberAfterPoint);
        answer = String(parseFloat(answer));
        answer += millionToShortStr;
        break;
      case isMoreOrEqualThousand:
        answer = (Math.sign(num) * ((Math.abs(num) / thousand))).toFixed(numberAfterPoint);
        answer = String(parseFloat(answer));
        answer += thousandToShortStr;
        break;
      default:
        answer = count;
    }

    return answer;
  }

}
