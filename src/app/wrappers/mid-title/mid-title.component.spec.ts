import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidTitleComponent } from './mid-title.component';

describe('MidTitleComponent', () => {
  let component: MidTitleComponent;
  let fixture: ComponentFixture<MidTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
