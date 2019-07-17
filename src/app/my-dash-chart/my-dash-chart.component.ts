import { Component, OnInit } from '@angular/core';
import { monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend, SingleDataSet, Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-my-dash-chart',
  templateUrl: './my-dash-chart.component.html',
  styleUrls: ['./my-dash-chart.component.css']
})
export class MyDashChartComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }

}
