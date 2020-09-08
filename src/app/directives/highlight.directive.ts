import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  @Input() public videoDate: string;
  public currentColor: string;

  @Input('appHighlight') public highlightColor: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.currentColor;
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

  public ngAfterViewInit(): void {

    const numberOfMillisecondsInDay: number = 1000 * 3600 * 24;
    let firstPeriodBgColor: string;
    firstPeriodBgColor = 'blue';
    let secondPeriodBgColor: string;
    secondPeriodBgColor = 'green';
    let thirdPeriodBgColor: string;
    thirdPeriodBgColor = 'black';
    let fourthPeriodBgColor: string;
    fourthPeriodBgColor = 'red';
    const firstTimePeriod: number = 7 * 1;
    const secondTimePeriod: number = 30 * 1;
    const thirdTimePeriod: number = 180 * 1;
    const dateVideoItem: Date = new Date(this.videoDate);
    const dateCurrent: Date = new Date();
    const differenceInTime: number = dateCurrent.getTime() - dateVideoItem.getTime();
    const differenceInDays: number = differenceInTime / numberOfMillisecondsInDay;

    if (differenceInDays < firstTimePeriod) {
      this.currentColor = firstPeriodBgColor;
    }
    if (differenceInDays >= firstTimePeriod && differenceInDays < secondTimePeriod) {
      this.currentColor = secondPeriodBgColor;
    }
    if (differenceInDays >= secondTimePeriod && differenceInDays <= thirdTimePeriod) {
      this.currentColor = thirdPeriodBgColor;
    }
    if (differenceInDays > thirdTimePeriod) {
      this.currentColor = fourthPeriodBgColor;
    }

    this.highlight(this.highlightColor || this.currentColor || 'null');
  }

}
