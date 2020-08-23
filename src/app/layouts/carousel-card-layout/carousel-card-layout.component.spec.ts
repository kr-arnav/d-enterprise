import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCardLayoutComponent } from './carousel-card-layout.component';

describe('CarouselCardLayoutComponent', () => {
  let component: CarouselCardLayoutComponent;
  let fixture: ComponentFixture<CarouselCardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselCardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
