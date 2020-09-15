import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSearchResultsItemComponent } from './content-search-results-item.component';

describe('ContentSearchResultsItemComponent', () => {
  let component: ContentSearchResultsItemComponent;
  let fixture: ComponentFixture<ContentSearchResultsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSearchResultsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSearchResultsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
