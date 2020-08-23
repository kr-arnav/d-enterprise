import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPushLayoutComponent } from './btn-push-layout.component';

describe('BtnPushLayoutComponent', () => {
  let component: BtnPushLayoutComponent;
  let fixture: ComponentFixture<BtnPushLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnPushLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPushLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
