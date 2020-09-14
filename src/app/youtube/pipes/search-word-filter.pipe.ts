import { IResponseItemsVideo } from './../models/youtube-response-example/youtube-response-example.module';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchWordFilter'
})
export class SearchWordFilterPipe implements PipeTransform {

  public transform(items: IResponseItemsVideo[], filter: string): IResponseItemsVideo[] {

    if (!items || !filter) {
        return items;
    }
    return items.filter(item => item.snippet.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
}

}
