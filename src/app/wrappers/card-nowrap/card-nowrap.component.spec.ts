import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNowrapComponent } from './card-nowrap.component';

describe('CardNowrapComponent', () => {
  let component: CardNowrapComponent;
  let fixture: ComponentFixture<CardNowrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNowrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNowrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
