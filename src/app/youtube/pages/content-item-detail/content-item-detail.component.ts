import { IResponseItemsVideo, IThumbnails } from './../../models/youtube-response-example/youtube-response-example.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../../core/services/content.service';

@Component({
  selector: 'app-content-item-detail',
  templateUrl: './content-item-detail.component.html',
  styleUrls: ['./content-item-detail.component.scss']
})

export class ContentItemDetailComponent implements OnInit {
  public videoId: string;
  public videoItem: IResponseItemsVideo;
  public colorBottomBg: string;

  constructor(public route: ActivatedRoute, private content: ContentService) {

  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.videoId = params.id;
    });

    if (this.content.response2) {
      this.videoItem = this.getVideo(this.content.response2.items, this.videoId)[0];
      this.content.post = null;
    } else {
      console.log('detail page');
      this.content.subscribeYoutubeVideoInfo(this.videoId);
      // this.videoItem = this.content.post;
    }

  }

  public ngDoCheck(): void {
    if (this.content.post) { this.videoItem = this.content.post; }
  }

  public getVideo(items: IResponseItemsVideo[], id: string): IResponseItemsVideo[] {

    if (!items || !id) {
      return items;
    }

    return items.filter(item => item.id.indexOf(id) !== -1);

  }

  public getImageVideo(item: IThumbnails): string {
    let urlImage: string;

    switch (true) {
      case (!!item.maxres):
        urlImage = item.maxres.url;
        break;
      case (!!item.standard):
        urlImage = item.standard.url;
        break;
      case (!!item.high):
        urlImage = item.high.url;
        break;
      case (!!item.medium):
        urlImage = item.medium.url;
        break;
      case (!!item.default):
        urlImage = item.default.url;
        break;
      default:
        urlImage = item.high.url;
        break;
    }

    return urlImage;

  }

}
