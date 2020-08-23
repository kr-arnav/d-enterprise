import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleLayoutComponent } from './page-title-layout.component';

describe('PageTitleLayoutComponent', () => {
  let component: PageTitleLayoutComponent;
  let fixture: ComponentFixture<PageTitleLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTitleLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
