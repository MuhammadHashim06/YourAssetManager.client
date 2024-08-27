import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../../../../../core/services/asset/asset.service';
import { UserService } from '../../../../../core/services/user/user.service';
import { AssetactionsService } from '../../../../../core/services/assetactions/assetactions.service';

@Component({
  selector: 'app-assetdetail',
  templateUrl: './assetdetail.component.html',
  styleUrl: './assetdetail.component.scss',
})
export class AssetdetailComponent implements OnInit {
  notes: any;
  requestId: any;
  assignasset($event: MouseEvent) {

    const data = {
      assignedToId: this.selectedUserId,
      assetId: this.assetdetail.id,
      notes: this.notes,
      requestId: this.requestId
    }
    this.assetactionservice.assignasset(data).pipe().subscribe(res=>{
      console.log(res);
      this.toogleaction()
      this.router.navigateByUrl('dashboard/asset')
    })
  }
  selectedUserId = '';
  onUserChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const selectedUserName = input.value;
    const user = this.allusers.find(u => u.userName === selectedUserName);
    this.selectedUserId = user ? user.id : null;
    console.log('Selected User ID:', this.selectedUserId);
  }
  onUserInput($event: Event) {
    throw new Error('Method not implemented.');
  }
  stoppropagation($event: MouseEvent) {
    $event.stopPropagation();
  }

  isaction = false
  toogleaction() {
    this.isaction = !this.isaction
  }
  sanitizer: any;
  updateasset(arg0: any) {
    this.router.navigateByUrl(`dashboard/asset/create/${arg0}`)
  }
  isLoading = true;
  relevatcategoriesinput: Array<any> = []
  router = inject(Router)
  deleteasset(arg0: any) {
    this.assetservice.deleteasset(arg0).pipe().subscribe(res => {
      console.log(res);
      this.updateassetdata()
      this.router.navigateByUrl('dashboard/asset')
    })

  }
  updateassetdata() {
    this.assetservice.updategetdata().subscribe(data => {
      console.log(data);

    })
  }
  id: any;
  assetdetail: any;
  constructor(
    private activedroute: ActivatedRoute,
    private assetservice: AssetService,
    private userservice: UserService,
    private assetactionservice: AssetactionsService) {

    this.id = this.activedroute.snapshot.params['id'];
    console.log(this.id);
    this.assetservice
      .getassetbyid(this.id)
      .pipe()
      .subscribe((res) => {
        this.isLoading = false
        this.assetdetail = res.responseData;
        this.relevatcategoriesinput = JSON.parse(this.assetdetail.catagoryReleventFeildsData)
        if (typeof (this.relevatcategoriesinput) == 'string') {
          this.relevatcategoriesinput = JSON.parse(this.assetdetail.catagoryReleventFeildsData)
          console.log(this.relevatcategoriesinput)
        }
      });
  }

  ngOnInit(): void {
    this.getalluser()
  }
  allusers: Array<any> = []
  getalluser() {
    this.userservice.getalluserS().pipe().subscribe(res => {
      this.allusers = res.responseData.$values
    })
  }
}
