import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchResultsFiltersComponent } from './header-search-results-filters.component';

describe('HeaderSearchResultsFiltersComponent', () => {
  let component: HeaderSearchResultsFiltersComponent;
  let fixture: ComponentFixture<HeaderSearchResultsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSearchResultsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchResultsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
