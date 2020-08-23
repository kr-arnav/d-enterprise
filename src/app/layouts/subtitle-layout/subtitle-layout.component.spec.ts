import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleLayoutComponent } from './subtitle-layout.component';

describe('SubtitleLayoutComponent', () => {
  let component: SubtitleLayoutComponent;
  let fixture: ComponentFixture<SubtitleLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitleLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
