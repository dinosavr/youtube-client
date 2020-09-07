import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-header-search-form',
  templateUrl: './header-search-form.component.html',
  styleUrls: ['./header-search-form.component.scss']
})
export class HeaderSearchFormComponent implements OnInit {

  // @Input() public message: string;
  @Output() public messageEvent: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  public ngOnInit(): void {
  }

  public onSubmit(f: NgForm): void {
    this.messageEvent.emit(f.value);
  }
}
