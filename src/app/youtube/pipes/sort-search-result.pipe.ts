import { IResponseItemsVideo } from './../models/youtube-response-example/youtube-response-example.module';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortSearchResult'
})
export class SortSearchResultPipe implements PipeTransform {

  public compareViewCount(a: IResponseItemsVideo, b: IResponseItemsVideo): number {

    let aItem: number;
    let bItem: number;

    aItem = Number(a.statistics.viewCount);
    bItem = Number(b.statistics.viewCount);

    if (aItem < bItem) {
      return 1;
    }
    if (aItem > bItem) {
      return -1;
    }
    return 0;
  }

  public compareDate(a: IResponseItemsVideo, b: IResponseItemsVideo): number {

    let aItem: string;
    let bItem: string;

    aItem = a.snippet.publishedAt;
    bItem = b.snippet.publishedAt;

    if (aItem < bItem) {
      return 1;
    }
    if (aItem > bItem) {
      return -1;
    }
    return 0;
  }

  public sortSearchResult(items: IResponseItemsVideo[], sort: string, desc: boolean): IResponseItemsVideo[] {

    if (sort === 'date') {
      items = items.sort(this.compareDate);
    }
    if (sort === 'countView') {
      items = items.sort(this.compareViewCount);
    }
    if (desc) { items = items.reverse(); }

    return items;
  }

  public transform(items: IResponseItemsVideo[], sort: string): IResponseItemsVideo[] {

    let sortType: string;
    let sortDirect: string;
    let isSortUp: boolean;

    isSortUp = false;

    if (!items || !sort) {
      return items;
    }

    [sortType, sortDirect] = sort.split('|');

    if (sortDirect === 'up') {
      isSortUp = true;
    } else { isSortUp = false; }

    return this.sortSearchResult(items, sortType, isSortUp);
  }

}
