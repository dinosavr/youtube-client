import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSearchResultsComponent } from './content-search-results.component';

describe('ContentSearchResultsComponent', () => {
  let component: ContentSearchResultsComponent;
  let fixture: ComponentFixture<ContentSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
