import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingService } from '../services/setting.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeInterceptor implements HttpInterceptor {
  constructor(private content: SettingService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({
      setParams: {
        key: this.content.YOUTUBE_API_KEY
      }
    }));
  }
}
