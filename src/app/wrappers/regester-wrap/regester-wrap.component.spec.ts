import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegesterWrapComponent } from './regester-wrap.component';

describe('RegesterWrapComponent', () => {
  let component: RegesterWrapComponent;
  let fixture: ComponentFixture<RegesterWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegesterWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegesterWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
