import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';
import { adminReducer } from './redux/reducers/admin.reducer';

// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { EffectsModule } from '@ngrx/effects';

// import { videosReducer, authReducer } from './redux/reducers';
// import { VideoEffects } from './redux/effects';
// import { environment } from '../environments/environment'; // Angular CLI environment

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot({ customVideo: adminReducer })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
