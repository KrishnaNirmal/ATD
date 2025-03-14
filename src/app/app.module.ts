import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtdVisualizationComponent } from './componenets/atd-visualization/atd-visualization.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AtdSvgComponent } from './componenets/atd-svg/atd-svg.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AtdChartComponent } from './componenets/atd-chart/atd-chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';


const MaterialModule = [MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule, 
  ReactiveFormsModule,
  MatIconModule]
  ;
@NgModule({
  declarations: [
    AppComponent,
    AtdVisualizationComponent,
    AtdSvgComponent,
    AtdChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MaterialModule,
    CanvasJSAngularChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
