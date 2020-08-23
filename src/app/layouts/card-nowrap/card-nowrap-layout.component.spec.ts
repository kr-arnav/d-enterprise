import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNowrapLayout } from './card-nowrap-layout.component';

describe('CardNowrapLayout', () => {
  let component: CardNowrapLayout;
  let fixture: ComponentFixture<CardNowrapLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNowrapLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNowrapLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
