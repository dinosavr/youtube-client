import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItems } from '../modules/youtube-response-example/youtube-response-example.module';
import { stringify } from 'querystring';

@Pipe({
  name: 'sortSearchResult'
})
export class SortSearchResultPipe implements PipeTransform {
  public isReversePrev: boolean;

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
    if (sort === 'date') { items = items.sort(this.compareDate); }
    if (sort === 'countView') { items = items.sort(this.compareViewCount); }
    if (desc) { items = items.reverse(); }
    return items;
  }

  public transform(items: IResponseItems[], sort: string): IResponseItems[] {

    let sortType: string;
    let reverse: string;
    let isReverse: boolean;

    isReverse = false;

    [sortType, reverse] = sort.split('|');

    if (!items || !sortType) {
      return items;
    }

    if (reverse === 'reverse' && !this.isReversePrev) {
      isReverse = true;
    } else { isReverse = false; }

    this.isReversePrev = isReverse;

    return this.sortSearchResult(items, sortType, isReverse);
  }

}
