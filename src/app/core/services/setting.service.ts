import { Injectable } from '@angular/core';

@Injectable()
export class SettingService {

  public readonly baseAppUrl: string = 'http://localhost:4200/';
  public readonly authorApp: string = 'Sidorov Alexandr';
  public readonly YOUTUBE_API_KEY: string = 'AIzaSyBE6DQJ01x34_wtbSQMcy-vwN1rPtXio3c';
  public readonly YOUTUBE_MAX_RESULTS: string = '12';
  public readonly YOUTUBE_URL_SEARCH: string = `https://www.googleapis.com/youtube/v3/search?key=${this.YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=${this.YOUTUBE_MAX_RESULTS}`;
  // https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBE6DQJ01x34_wtbSQMcy-vwN1rPtXio3c&part=snippet,statistics&id=bEwAtcqWloM,tWNVL7NF47w,0MrjpIuI590,M26qdzFWXcg,zlsdyo_gvx8,-w8dbOVK0BA,m__Youe6AyE,2TJo0JUhUGk,65mdbAdvAug,TvuDuLGh_IM,5c7bqmH8_H0
  public readonly YOUTUBE_URL_VIDEOS: string = `https://www.googleapis.com/youtube/v3/videos?key=${this.YOUTUBE_API_KEY}&part=snippet,statistics`;
  public readonly YOUTUBE_MIN_LENGTH_SEARCH_QUERY: number = 3;
  public readonly YOUTUBE_DELAY_SEND_QUERY: number = 1500;
  public readonly urlMain: string = '/';
  public readonly urlLogin: string = 'login';

  public txtChangeAuthState: string = '';
  public readonly txtLogInState: string = 'Login';
  public readonly txtLogOutState: string = 'Logout';
}
