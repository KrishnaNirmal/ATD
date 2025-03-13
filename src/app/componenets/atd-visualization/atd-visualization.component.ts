import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atd-visualization',
  templateUrl: './atd-visualization.component.html',
  styleUrls: ['./atd-visualization.component.css'],
  animations: [
    trigger('rotateOnVerticalAxis', [
      state('front', style({ transform: 'rotateY(0deg)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front <=> back', [
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class AtdVisualizationComponent implements OnInit{
  sensorForm!: FormGroup; 
  sensors = [
  { id: 1, x: 300, y: 15 },    // Head
  { id: 2, x: 300, y: 130 },  // Neck
  { id: 3, x: 140, y: 80 },   // Left Shoulder
  { id: 4, x: 220, y: 180 },   // Left Elbow
  { id: 5, x: 300, y: 180 },   // Torso
  { id: 6, x: 460, y: 80 },   // Right Shoulder
  { id: 7, x: 300, y: 300 },   // Lower Torso
  { id: 8, x: 230, y: 530 },   // Left Foot
  { id: 9, x: 370, y: 530 }    // Right Foot
  ];

  sensorColors: string[] = Array(9).fill('white');
  currentState = 'front';  

  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.createSensorForm();
  }

  createSensorForm(){
    this.sensorForm = this.fb.group({
      inputString: [
        '', 
        [Validators.required, Validators.pattern(/^[GRY]{9}$/)] // Creating validation for GRY is valid only 
      ]
    });
  }

  updateSensorStatus(input: string): void {
    if (input.length !== 9 || !/^[GRY]+$/.test(input)) {
      alert('Invalid input! Please enter a 9-character string using only G, R, and Y.');
      return;
    }

    this.sensorColors = input.split('').map(char => {
      return char === 'G' ? 'green' : char === 'R' ? 'red' : 'yellow';
    });
  }

  toggleRotation() {
    this.currentState = this.currentState === 'front' ? 'back' : 'front';
  }
}
