import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtdChartComponent } from './atd-chart.component';

describe('AtdChartComponent', () => {
  let component: AtdChartComponent;
  let fixture: ComponentFixture<AtdChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtdChartComponent]
    });
    fixture = TestBed.createComponent(AtdChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
