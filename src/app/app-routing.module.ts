import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtdVisualizationComponent } from './componenets/atd-visualization/atd-visualization.component';
import { AtdChartComponent } from './componenets/atd-chart/atd-chart.component';
import { DashboardComponent } from './componenets/dashboard/dashboard.component';

const routes: Routes = [{
  path:'atd',
  component:AtdVisualizationComponent
},
{
  path:'history',
  component: AtdChartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
