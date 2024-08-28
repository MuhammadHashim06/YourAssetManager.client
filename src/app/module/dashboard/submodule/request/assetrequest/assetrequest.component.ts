import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../../../../core/services/board/board.service';
import { AssetactionsService } from '../../../../../core/services/assetactions/assetactions.service';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { AssetService } from '../../../../../core/services/asset/asset.service';

@Component({
  selector: 'app-assetrequest',
  templateUrl: './assetrequest.component.html',
  styleUrls: ['./assetrequest.component.scss'],
})
export class AssetrequestComponent implements OnInit {
  // Component properties
  assetId: any;
  notes: any;
  requestId: any;
  isaccept = false;
  ismodel = false;
  processed = true;
  categorylist: Array<any> = [];
  assetslist: Array<any> = [];
  selectedrequestid = 0;
  selectedrequest: any;
  allrequest: Array<any> = [];

  // Inject services via constructor
  constructor(
    private dashboardservice: BoardService,
    private assetactionsservice: AssetactionsService,
    private categoryservice: CategoryService,
    private assetservice: AssetService
  ) {}

  // Lifecycle hook: Initialize component
  ngOnInit(): void {
    this.getassetrequests();
    this.loadCategories();
  }

  // Load categories from CategoryService
  loadCategories() {
    this.categoryservice.getcategory().subscribe(
      res => this.categorylist = res.responseData.$values,
      error => console.log(error)
    );
  }

  // Fetch asset requests
  getassetrequests() {
    this.dashboardservice.getallrequests().subscribe(
      res => this.allrequest = res.responseData.$values,
      error => console.log(error)
    );
  }

  // Show or hide the accept modal
  showaccept(event: MouseEvent) {
    this.isaccept = true;
    // Removed the unnecessary throw statement
  }

  // Toggle the visibility of the modal
  togglemodel() {
    this.ismodel = !this.ismodel;
    this.isaccept = false;
  }

  // Handle asset selection
  selectasset(event: any) {
    this.assetId = event.target.value;
  }

  // Fetch available assets by category
  getavailableassets(event: any) {
    const id = event.target.value;
    if (id > 0) {
      this.assetservice.getavailabelassetbycategory(id).subscribe(
        res => this.assetslist = res.responseData.$values,
        error => console.log(error)
      );
    } else {
      this.assetslist = [];
    }
  }

  // Accept asset request
  acceptrequest(id: any) {
    this.processed = false;
    const data = {
      assignedToId: this.selectedrequest.requesterId,
      assetId: this.assetId,
      notes: this.notes,
      requestId: this.selectedrequest.requestId
    };
    console.log(data);

    
    
    this.assetactionsservice.fulfilledRequest(data).subscribe(
      res => {
        this.getassetrequests();
        this.togglemodel();
        this.processed = true;
      },
      error => console.log(error)
    );
  }

  // Decline asset request
  declinerequest(id: any) {
    this.processed = false;
    const data = { RequestId: id };
    this.assetactionsservice.declinerequest(data).subscribe(
      res => {
        this.getassetrequests();
        this.togglemodel();
        this.processed = true;
      },
      error => console.log(error)
    );
  }

  // Get request by ID
  getbyid(id: any) {
    this.selectedrequestid = id;
    this.selectedrequest = this.allrequest.find(r => r.requestId === this.selectedrequestid);
    console.log(this.selectedrequest);
    this.togglemodel();
  }

  // Stop event propagation
  stoppropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
