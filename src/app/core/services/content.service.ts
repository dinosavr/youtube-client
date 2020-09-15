import { Injectable } from '@angular/core';
import { IResponse, IResponseItems, IResponseVideos, IResponseItemsVideo } from './../../youtube/models/youtube-response-example/youtube-response-example.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingService } from '../services/setting.service';

@Injectable()
export class ContentService {

  public posts: IResponseItems[];
  public post: IResponseItemsVideo;

  // tslint:disable-next-line:no-any
  public error: any;
  public headers: string[];
  public response: IResponse;
  public response2: IResponseVideos;
  public responseVideoInfo: IResponseVideos;

  constructor(private httpClient: HttpClient, private setting: SettingService) { }

  private getYoutubeVideoList(query: string): Observable<IResponse> {
    query = encodeURI(query).trim();
    return this.httpClient.get<IResponse>(`${this.setting.YOUTUBE_URL_SEARCH}&q=${query}`);
  }

  private getYoutubeVideosInfo(query: string): Observable<IResponseVideos> {
    return this.httpClient.get<IResponseVideos>(`${this.setting.YOUTUBE_URL_VIDEOS}&id=${query}`);
  }

  public subscribeYoutubeVideoList(query: string): void {
    let queryYoutubeVideosInfo: string;
    this.getYoutubeVideoList(query)
      .subscribe(
        (videoList: IResponse) => this.response = {
          kind: videoList.kind,
          etag: videoList.etag,
          pageInfo: videoList.pageInfo,
          items: videoList.items,
        },
        err => console.error('something wrong occurred: ' + err),
        () => {
          queryYoutubeVideosInfo = this.response.items.map(item => item.id.videoId).join(',');
          this.subscribeYoutubeVideosInfo(queryYoutubeVideosInfo);
        }
      );

  }

  public subscribeYoutubeVideosInfo(query: string): void {
    let isDetailPage: boolean;
    this.getYoutubeVideosInfo(query)
      .subscribe(
        (videoInfo: IResponseVideos) => {
          this.response2 = {
            kind: videoInfo.kind,
            etag: videoInfo.etag,
            pageInfo: videoInfo.pageInfo,
            items: videoInfo.items,
          };

        },
        err => console.error('something wrong occurred: ' + err),
        () => {

          isDetailPage = (this.response2.items.length === 1);
          if (isDetailPage){
            console.log('Detail Info was got');
            console.log(this.response2);
          }
        }
      );

  }

  public subscribeYoutubeVideoInfo(query: string): void {
    this.getYoutubeVideosInfo(query)
      .subscribe(
        (videoInfo: IResponseVideos) => {
          this.responseVideoInfo = {
            kind: videoInfo.kind,
            etag: videoInfo.etag,
            pageInfo: videoInfo.pageInfo,
            items: videoInfo.items,
          };

        },
        err => console.error('something wrong occurred: ' + err),
        () => {
             this.post = this.responseVideoInfo.items[0];
        }
      );

  }

}
