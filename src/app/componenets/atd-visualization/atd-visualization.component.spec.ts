import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtdVisualizationComponent } from './atd-visualization.component';

describe('AtdVisualizationComponent', () => {
  let component: AtdVisualizationComponent;
  let fixture: ComponentFixture<AtdVisualizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtdVisualizationComponent]
    });
    fixture = TestBed.createComponent(AtdVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
