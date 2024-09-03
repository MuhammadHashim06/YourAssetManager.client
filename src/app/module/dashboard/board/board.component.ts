import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { BoardService } from '../../../core/services/board/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'] 
})
export class BoardComponent implements OnInit {

  // Chart properties
  public chartType: string = 'bar';
  public chartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartOptions: any = { responsive: true };
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)'
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)'
    }
  ];
  public chartLegend: boolean = false;
  public chartPlugins: any[] = [];
  public view: [number, number] = [500, 300];  // Size of the chart

  // Data for number cards
  public numberCardData: Array<any> = [];

  // Data for charts
  public assetCategoryData: any[] = [];
  public assetStatus: any[] = [];

  // Color scheme for charts
  public colorScheme: Color = {
    domain: ['rgba(0, 182, 155, 0.75)', 'rgba(98, 38, 239, 0.75)', 'rgba(239, 56, 38, 0.75)', 'rgba(255, 167, 86, 0.75)'],
    name: 'coolScheme',
    selectable: true,
    group: ScaleType.Ordinal
  };

  // User role and stats
  public currentUser: any;
  public role: any;
  public stats: any;

  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit(): void {
    this.initializeUserRole();
    this.loadStats();
  }

  private initializeUserRole(): void {
    const dataString = sessionStorage.getItem('currentuser');
    if (dataString) {
      this.currentUser = JSON.parse(dataString);
      const roles = this.currentUser.roles.$values;
      if (roles.includes('OrganizationOwner')) {
        this.role = 'OrganizationOwner';
      } else if (roles.includes('AssetManager')) {
        this.role = 'AssetManager';
      } else {
        this.role = 'Employee';
      }
      if (this.role === 'Employee') {
        this.router.navigateByUrl('dashboard/requests/yourrequests');
      }
    }
  }

  private loadStats(): void {
    this.boardService.getallstats().subscribe(res => {
      this.stats = res.responseData;
      this.loadAssetCategoryData();
      this.loadAssetValueData();
      this.numberCardData = [
        { name: 'Total Assets', value: this.stats.assetCount },
        { name: 'Categories', value: this.stats.catagoryCount },
        { name: 'Vendors', value: this.stats.vendorCount },
        { name: 'Asset Types', value: this.stats.assetTypeCount }
      ];
    });
  }

  private loadAssetCategoryData(): void {
    this.assetCategoryData = this.stats.assetCountByCatagory.$values;
  }

  private loadAssetValueData(): void {
    this.assetStatus = this.stats.assetCountByStatus.$values;
  }
}
