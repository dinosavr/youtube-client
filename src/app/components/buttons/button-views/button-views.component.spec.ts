import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonViewsComponent } from './button-views.component';

describe('ButtonViewsComponent', () => {
  let component: ButtonViewsComponent;
  let fixture: ComponentFixture<ButtonViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
