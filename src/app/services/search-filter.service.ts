import { Injectable } from '@angular/core';

@Injectable()

export class SearchFilterService {

  public searchResultFilterQuery: string;
  public searchResultWordFilter: string;

  constructor() { }
}
