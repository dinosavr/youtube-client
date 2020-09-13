import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContentService } from './../../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public message: object;
  public isSearchFiltersShow: boolean = false;

  @Output() public messageEventHeader: EventEmitter<object> = new EventEmitter<object>();
  @Output() public wordFilterEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(public contentService: ContentService) { }

  public ngOnInit(): void {
  }

  public receiveMessage($event: object): void {
    this.messageEventHeader.emit($event);
  }

  public receiveToggleSearchFilters(): void {
    this.isSearchFiltersShow = !this.isSearchFiltersShow;
  }

  public wordFilter($word: string): void {
    this.wordFilterEvent.emit($word);
  }

}
