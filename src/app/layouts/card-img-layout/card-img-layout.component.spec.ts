import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImgLayout } from './card-img-layout.component';

describe('CardImgLayout', () => {
  let component: CardImgLayout;
  let fixture: ComponentFixture<CardImgLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardImgLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImgLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
