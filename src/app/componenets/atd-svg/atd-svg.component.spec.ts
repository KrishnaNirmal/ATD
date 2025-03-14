import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtdSvgComponent } from './atd-svg.component';

describe('AtdSvgComponent', () => {
  let component: AtdSvgComponent;
  let fixture: ComponentFixture<AtdSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtdSvgComponent]
    });
    fixture = TestBed.createComponent(AtdSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
