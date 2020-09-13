import { Component, ViewChild, ElementRef, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, fromEvent, from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { concatMap, map, debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';

@Component({
  selector: 'app-header-search-form',
  templateUrl: './header-search-form.component.html',
  styleUrls: ['./header-search-form.component.scss']
})
export class HeaderSearchFormComponent {

  @ViewChild('toTarget') public toTarget: ElementRef;
   public previousRes: HTMLTextAreaElement;
  constructor() { }

/*   public ngAfterViewInit(): void {
    (fromEvent(this.toTarget.nativeElement, 'keyup') as Observable<KeyboardEvent>)
      .pipe(concatMap(item => of(item).pipe(delay(1000)))
      ).subscribe(res => {
        console.log((<HTMLTextAreaElement>res.target).value);
      });
  } */

  public ngAfterViewInit(): void {
    (fromEvent(this.toTarget.nativeElement, 'keyup') as Observable<KeyboardEvent>)
    .pipe(map((event: Event) => (event.target as HTMLInputElement).value))
    .pipe(debounceTime(3000))
    .pipe(distinctUntilChanged())
    .subscribe(data => console.log(data));
  }

}
