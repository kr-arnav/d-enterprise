import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWrapLayout } from './card-wrap-layout.component';

describe('CardWrapLayout', () => {
  let component: CardWrapLayout;
  let fixture: ComponentFixture<CardWrapLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWrapLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWrapLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
