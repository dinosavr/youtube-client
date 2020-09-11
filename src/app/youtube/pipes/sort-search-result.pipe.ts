import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItems } from '../models/youtube-response-example/youtube-response-example.module';

@Pipe({
  name: 'sortSearchResult'
})
export class SortSearchResultPipe implements PipeTransform {

  public compareViewCount(a: IResponseItems, b: IResponseItems): number {

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

  public compareDate(a: IResponseItems, b: IResponseItems): number {

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

  public sortSearchResult(items: IResponseItems[], sort: string, desc: boolean): IResponseItems[] {

    if (sort === 'date') {
      items = items.sort(this.compareDate);
    }
    if (sort === 'countView') {
      items = items.sort(this.compareViewCount);
    }
    if (desc) { items = items.reverse(); }

    return items;
  }

  public transform(items: IResponseItems[], sort: string): IResponseItems[] {

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
