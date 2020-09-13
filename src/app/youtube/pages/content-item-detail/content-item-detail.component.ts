import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../../core/services/content.service';
import { IResponseItems } from '../../models/youtube-response-example/youtube-response-example.module';

@Component({
  selector: 'app-content-item-detail',
  templateUrl: './content-item-detail.component.html',
  styleUrls: ['./content-item-detail.component.scss']
})
// export class ContentItemDetailComponent implements OnInit {

export class ContentItemDetailComponent implements OnInit {
  public videoId: string;
  public videoItem: IResponseItems;
  public colorBottomBg: string;

  constructor(public route: ActivatedRoute, private contentService: ContentService) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.videoId = params.id;
    });

    this.videoItem = this.getVideo(this.contentService.posts, this.videoId)[0];
  }

  public getVideo(items: IResponseItems[], id: string): IResponseItems[] {

    if (!items || !id) {
      return items;
    }

    return items.filter(item => item.id.videoId.indexOf(id) !== -1);

  }

}
