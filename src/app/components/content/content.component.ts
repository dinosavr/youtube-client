import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() public isSearchResultShow: boolean;
  @Input() public searchSort: string;
  @Input() public wordFilter: string;

  constructor() { }

  public ngOnInit(): void {
  }
}
