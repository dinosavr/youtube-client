import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  @Input() public videoDate: string;
  public currentColor: string;

  @Input('appHighlight') public highlightColor: string;

  constructor(private el: ElementRef) { }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

  public ngAfterViewInit(): void {

    const dateVideoItem: Date = new Date(this.videoDate);
    const dateCurrent: Date = new Date();
    const differenceInTime: number = dateCurrent.getTime() - dateVideoItem.getTime();
    const differenceInDays: number = differenceInTime / (1000 * 3600 * 24);

    if (differenceInDays < 30) { this.currentColor = 'green'; }
    if (differenceInDays < 7) { this.currentColor = 'blue'; }
    if (differenceInDays > 180) { this.currentColor = 'red'; }

    this.highlight(this.highlightColor || this.currentColor || 'null');
  }

}
