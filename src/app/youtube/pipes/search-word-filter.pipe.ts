import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItems } from '../models/youtube-response-example/youtube-response-example.module';

@Pipe({
  name: 'searchWordFilter'
})
export class SearchWordFilterPipe implements PipeTransform {

  public transform(items: IResponseItems[], filter: string): IResponseItems[] {

    if (!items || !filter) {
        return items;
    }
    return items.filter(item => item.snippet.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
}

}
