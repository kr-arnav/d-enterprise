import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPushComponent } from './btn-push.component';

describe('BtnPushComponent', () => {
  let component: BtnPushComponent;
  let fixture: ComponentFixture<BtnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
