import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidTitleLayoutComponent } from './mid-title-layout.component';

describe('MidTitleLayoutComponent', () => {
  let component: MidTitleLayoutComponent;
  let fixture: ComponentFixture<MidTitleLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidTitleLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidTitleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
