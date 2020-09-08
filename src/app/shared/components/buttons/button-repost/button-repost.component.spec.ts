import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRepostComponent } from './button-repost.component';

describe('ButtonRepostComponent', () => {
  let component: ButtonRepostComponent;
  let fixture: ComponentFixture<ButtonRepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
