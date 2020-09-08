import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSearchResultsFiltersComponent } from './button-search-results-filters.component';

describe('ButtonSearchResultsFiltersComponent', () => {
  let component: ButtonSearchResultsFiltersComponent;
  let fixture: ComponentFixture<ButtonSearchResultsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSearchResultsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSearchResultsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
