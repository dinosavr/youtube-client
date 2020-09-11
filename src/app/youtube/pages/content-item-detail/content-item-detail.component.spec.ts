import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItemDetailComponent } from './content-item-detail.component';

describe('ContentItemDetailComponent', () => {
  let component: ContentItemDetailComponent;
  let fixture: ComponentFixture<ContentItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
