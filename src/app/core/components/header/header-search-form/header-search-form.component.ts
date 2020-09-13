import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent} from 'rxjs';
import { filter, map, debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';
import { ContentService } from '../../../services/content.service';
import { SettingService } from '../../../services/setting.service';

@Component({
  selector: 'app-header-search-form',
  templateUrl: './header-search-form.component.html',
  styleUrls: ['./header-search-form.component.scss']
})
export class HeaderSearchFormComponent {

  @ViewChild('toTarget') public toTarget: ElementRef;

  constructor(private setting: SettingService, private content: ContentService) { }

  public ngAfterViewInit(): void {

    (fromEvent(this.toTarget.nativeElement, 'input') as Observable<KeyboardEvent>)
    .pipe(map((event: Event) => (event.target as HTMLInputElement).value))
    .pipe(debounceTime(this.setting.YOUTUBE_DELAY_SEND_QUERY))
    .pipe(distinctUntilChanged())
    .pipe(filter(data => data.length >= this.setting.YOUTUBE_MIN_LENGTH_SEARCH_QUERY))
    .subscribe(data => this.content.showResponse(data));
  }

}
