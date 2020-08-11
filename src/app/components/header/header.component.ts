import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public message: object;
  public isSearchFiltersShow: boolean = false;

  @Output() public messageEventHeader: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  public ngOnInit(): void {
  }

  public receiveMessage($event: object): void {
      this.messageEventHeader.emit($event);
  }

  public receiveToggleSearchFilters($event: object): void {
    this.isSearchFiltersShow = this.isSearchFiltersShow ? false : true;
}

}
