import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ContentLoginComponent } from './pages/content-login/content-login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    ContentLoginComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
