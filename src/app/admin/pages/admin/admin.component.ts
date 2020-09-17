import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState, ICustomVideo } from '../../../redux/state.models';
import { addVideo } from '../../../redux/actions/admin.actions';
import { SettingService } from '../../../core/services/setting.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  public customVideo$: Observable<IAppState>;

  constructor(
    private setting: SettingService,
    public router: Router,
    private store: Store<{ customVideo: IAppState }>
  ) {

    this.customVideo$ = store.pipe(select('customVideo'));

  }

  private createNewCustomVideoData(f: NgForm): ICustomVideo {
    const currentDate: number = Date.now();
    const newCustomVideo: ICustomVideo = {
      id: f.value.video,
      snippet: {
        title: f.value.title,
        publishedAt: new Date(currentDate).toDateString(),
        description: f.value.description,
        thumbnails: {
          default: {
            url: f.value.image,
            width: 200,
            height: 100
          }
        }
      },
      statistics: {
        viewCount: '0',
        likeCount: '0',
        dislikeCount: '0',
        commentCount: '0',
        favoriteCount: '0'
      }
    };

    return newCustomVideo;
  }

  public ngOnInit(): void {
  }
  public onSubmit(f: NgForm): void {

    const newCustomVideo: ICustomVideo = this.createNewCustomVideoData(f);
    this.store.dispatch(addVideo({ payload: newCustomVideo }));
   // this.router.navigate([this.setting.URL_MAIN]);
  }

  public addVideo(customVideo: ICustomVideo): void {
    this.store.dispatch(addVideo({ payload: customVideo }));
  }

}
