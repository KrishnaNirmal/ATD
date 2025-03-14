import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atd-svg',
  templateUrl: './atd-svg.component.html',
  styleUrls: ['./atd-svg.component.css']
})
export class AtdSvgComponent {
  @Input() sensors: { id: number; x: number; y: number }[] = [];
  @Input() sensorColors: string[] = [];
}
