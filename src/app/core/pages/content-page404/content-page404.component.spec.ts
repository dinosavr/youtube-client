import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPage404Component } from './content-page404.component';

describe('ContentPage404Component', () => {
  let component: ContentPage404Component;
  let fixture: ComponentFixture<ContentPage404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPage404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPage404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
