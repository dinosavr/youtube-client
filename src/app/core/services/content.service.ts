import { Injectable } from '@angular/core';
import { IResponse, IResponseItems } from './../../youtube/models/youtube-response-example/youtube-response-example.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingService } from '../services/setting.service';

@Injectable()
export class ContentService {

  public posts: IResponseItems[];

  // tslint:disable-next-line:no-any
  public error: any;
  public headers: string[];
  public response: IResponse;

  constructor(private httpClient: HttpClient, private setting: SettingService) { }

  private getYoutubeVideoList(query: string): Observable<IResponse> {
    query = encodeURI(query).trim();
    return this.httpClient.get<IResponse>(`${this.setting.YOUTUBE_URL_SEARCH}&q=${query}`);
  }

  private getYoutubeVideosInfo(): Observable<IResponse> {
    return this.httpClient.get<IResponse>(this.setting.YOUTUBE_URL_VIDEOS);
  }

  public showResponse(query: string): void {
    this.getYoutubeVideoList(query)
      .subscribe((response: IResponse) => this.response = {
        kind: response.kind,
        etag: response.etag,
        pageInfo: response.pageInfo,
        items: response.items,
      });
  }

}
