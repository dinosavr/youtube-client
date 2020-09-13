import { Injectable } from '@angular/core';
import { IResponse, IResponseItems } from './../../youtube/models/youtube-response-example/youtube-response-example.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingService } from '../services/setting.service';

@Injectable()
export class ContentService {

  public posts: IResponseItems[];

  constructor(private httpClient: HttpClient, private setting: SettingService) { }

  public getYoutubeVideoList(): Observable<IResponse> {
    return this.httpClient.get<IResponse>(this.setting.YOUTUBE_URL_SEARCH);
  }

  public getYoutubeVideosInfo(): Observable<IResponse> {
    return this.httpClient.get<IResponse>(this.setting.YOUTUBE_URL_VIDEOS);
  }


}
