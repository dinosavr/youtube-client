import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ContentService } from './services/content.service';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ],
  providers: [ContentService],
  exports: [FooterComponent],
})
export class CoreModule { }
