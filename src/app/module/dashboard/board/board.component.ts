import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {




  public chartType: string = 'bar'; // You can change this to 'line', 'pie', etc.

  // Define the chart data
  public chartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  // Define the chart labels
  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Define the chart options
  public chartOptions: any = {
    responsive: true,
  };

  // Define the chart colors
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
    }
  ];

  // Define the chart legend
  public chartLegend: boolean = true;

  // Define the chart type
  public chartPlugins: any[] = [];











  view: [number,number] = [700, 400]; // Size of the chart

  // Chart data
  assetCategoryData: any[] = [];
  assetValueData: any[] = [];

  // Chart color scheme
  colorScheme : Color   = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'coolScheme', // Optional
    selectable: true,   // Optional
    group:ScaleType.Ordinal
    
  };

  constructor() {}

  ngOnInit(): void {
    this.loadAssetCategoryData();
    this.loadAssetValueData();
  }

  loadAssetCategoryData() {
    // Sample data; replace with real data
    this.assetCategoryData = [
      { "name": "Laptops", "value": 10 },
      { "name": "Mouse", "value": 15 },
      { "name": "Screen", "value": 5 },
      { "name": "Keyboard", "value": 8 },
      { "name": "Tablets", "value": 3 }
    ];
  }

  loadAssetValueData() {
    // Sample data; replace with real data
    this.assetValueData = [
      { "name": "Laptops", "value": 10000 },
      { "name": "Mouse", "value": 1500 },
      { "name": "Screen", "value": 2000 },
      { "name": "Keyboard", "value": 800 },
      { "name": "Tablets", "value": 3000 }
    ];
  }

}
