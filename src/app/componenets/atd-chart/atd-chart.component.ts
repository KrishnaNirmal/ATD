import { Component, OnInit } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-atd-chart',
  templateUrl: './atd-chart.component.html',
  styleUrls: ['./atd-chart.component.css']
})
export class AtdChartComponent implements OnInit{
  
  chartOptions: any;
  sensorData: { x: number; y: number; sensorId: number }[][] = []; // Data for multiple sensors
  sensors: number[] = [1, 2, 3]; // Mock 3 sensors for now
  startDate: Date | null = null;
  startTime: string = '';
  endDate: Date | null = null;
  endTime: string = '';

  constructor() {
  
  }
  ngOnInit(): void {
    this.generateMockData();
    this.populateChartData();
  }

  populateChartData() {
    this.chartOptions = {
      animationEnabled: true,
      title: {
        text: "ATD Sensor Points Over Time"
      },
      axisX: {
        title: "Time",
        valueFormatString: "HH:mm:ss",
        labelFormatter: function (e: any) {
          return CanvasJS.formatDate(new Date(e.value), "HH:mm:ss");
        }
      },
      axisY: {
        title: "Data Points",
        minimum: 0,
        maximum: 100
      },
      data: this.sensorData.map((sensorSeries, index) => ({
        type: "line",
        showInLegend: true,
        name: `Sensor ${this.sensors[index]}`,
        dataPoints: sensorSeries.map(dataPoint => ({
          x: dataPoint.x, 
          y: dataPoint.y
        }))
      }))
    };
  }

  generateMockData() {
    const now = new Date().getTime();
    this.sensorData = this.sensors.map(sensorId => {
      return Array.from({ length: 500 }, (_, i) => {
        return {
          x: now - (500 - i) * 100,  // Adjust time intervals (100ms)
          y: Math.random() * 100,     // Random Y value between 0 and 100
          sensorId
        };
      });
    });
  }

  updateChart() {
    const start = new Date(`${this.startDate} ${this.startTime}`);
    const end = new Date(`${this.endDate} ${this.endTime}`);

    const filteredData = this.sensorData.map(sensorSeries => {
      return sensorSeries.filter(dataPoint => {
        const dataTime = new Date(dataPoint.x); 
        return dataTime >= start && dataTime <= end;
      });
    });

    this.chartOptions.data = filteredData.map((sensorSeries, index) => ({
      type: "line",
      showInLegend: true,
      name: `Sensor ${this.sensors[index]}`,
      dataPoints: sensorSeries.map(dataPoint => ({
        x: new Date(dataPoint.x), 
        y: dataPoint.y
      }))
    }));

    this.chartOptions = { ...this.chartOptions }; 
  }
}
