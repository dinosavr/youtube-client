import { Injectable } from '@angular/core';

@Injectable()
export class SettingService {

  public readonly BASE_APP_URL: string = 'http://localhost:4200/';
  public readonly AUTHOR_APP: string = 'Sidorov Alexandr';
  public readonly YOUTUBE_API_KEY: string = 'AIzaSyBE6DQJ01x34_wtbSQMcy-vwN1rPtXio3c';
  // public readonly YOUTUBE_API_KEY: string = 'AIzaSyACEPoo2hoSm6_A3UXCE3cvNSbwr_F8y_4';
  public readonly YOUTUBE_MAX_RESULTS: string = '12';
  public readonly YOUTUBE_URL_SEARCH: string = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=${this.YOUTUBE_MAX_RESULTS}`;
  public readonly YOUTUBE_URL_VIDEOS: string = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics`;
  public readonly YOUTUBE_MIN_LENGTH_SEARCH_QUERY: number = 3;
  public readonly YOUTUBE_DELAY_SEND_QUERY: number = 1500;
  public readonly YOUTUBE_DEFAULT_QUERY: string = 'Angular React Vue What is best?';
  public readonly URL_MAIN: string = '/';
  public readonly URL_LOGIN: string = 'login';
  public readonly URL_ADMIN: string = 'admin';

  public txtChangeAuthState: string = '';
  public readonly TXT_LOG_IN_STATE: string = 'Login';
  public readonly TXT_LOG_OUT_STATE: string = 'Logout';
}
