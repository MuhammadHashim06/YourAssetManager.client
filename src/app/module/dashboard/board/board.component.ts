import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { BoardService } from '../../../core/services/board/board.service';
import { Router } from '@angular/router';

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
  public chartLegend: boolean = false;

  // Define the chart type
  public chartPlugins: any[] = [];



  view: [number, number] = [500, 300]; // Size of the chart
  numberCardData:Array<any>=[]
  // Chart data
  loadstats(){
    this.loadAssetCategoryData();
    this.loadAssetValueData();
   this.numberCardData = [
      {
        "name": "Total Assets",
        "value": this.stats.assetCount
      },
      {
        "name": "Categories",
        "value": this.stats.catagoryCount
      },
      {
        "name": "Vendors",
        "value": this.stats.vendorCount
      },
      {
        "name": "Asset Types",
        "value": this.stats.assetTypeCount
      }
    ];
  }
  assetCategoryData: any[] = [];
  assetstatus: any[] = [];
 

  // Chart color scheme
  colorScheme: Color = {
    domain: ['rgba(0, 182, 155, 0.75)', 'rgba(98, 38, 239, 0.75)', 'rgba(239, 56, 38, 0.75)', 'rgba(255, 167, 86, 0.75)'],
    name: 'coolScheme', // Optional
    selectable: true,   // Optional
    group: ScaleType.Ordinal

  };

  currentuser:any
  role:any
  constructor(private boardservice: BoardService,private router : Router) {
    var role: Array<any>
    const datastring = sessionStorage.getItem('currentuser')
    if (datastring != undefined || datastring != null) {
      this.currentuser = JSON.parse(datastring)
      role  = this.currentuser.roles.$values
      if (role.includes('OrganizationOwner')) {
        this.role = 'OrganizationOwner'
      } else if (role.includes('AssetManager')) {
        this.role = 'AssetManager'
      } else {
        this.role = 'Employee'
      }
if(this.role=='Employee'){
  this.router.navigateByUrl('dashboard/requests/yourrequests')
}
    }
   }

  stats: any

  ngOnInit(): void {

    this.boardservice.getallstats().pipe().subscribe(res => {
      this.stats = res.responseData
      this.loadstats()
    })
    
  }

  loadAssetCategoryData() {
    // Sample data; replace with real data
    // this.assetCategoryData = [
    //   { "name": "Laptops", "value": 10 },
    //   { "name": "Mouse", "value": 15 },
    //   { "name": "Screen", "value": 5 },
    //   { "name": "Keyboard", "value": 8 },
    //   { "name": "Tablets", "value": 3 }
    // ];

    this.assetCategoryData=this.stats.assetCountByCatagory.$values
  }

  loadAssetValueData() {
    // Sample data; replace with real data
    // this.assetstatus = [
    //   { "name": "Laptops", "value": 10000 },
    //   { "name": "Mouse", "value": 1500 },
    //   { "name": "Screen", "value": 2000 },
    //   { "name": "Keyboard", "value": 800 },
    //   { "name": "Tablets", "value": 3000 }
    // ];
    this.assetstatus=this.stats.assetCountByStatus.$values
  }

}
