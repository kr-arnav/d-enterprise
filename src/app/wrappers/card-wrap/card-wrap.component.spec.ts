import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWrapComponent } from './card-wrap.component';

describe('CardWrapComponent', () => {
  let component: CardWrapComponent;
  let fixture: ComponentFixture<CardWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
