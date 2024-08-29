import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from '../../../../../core/services/asset/asset.service';
import { UserService } from '../../../../../core/services/user/user.service';
import { AssetactionsService } from '../../../../../core/services/assetactions/assetactions.service';
import { Alert } from '../../../../../shared/reusablecomponents/alert/alert.component';

@Component({
  selector: 'app-assetdetail',
  templateUrl: './assetdetail.component.html',
  styleUrl: './assetdetail.component.scss',
})
export class AssetdetailComponent implements OnInit {
returncondition: any;
isprocessing=false
alert: Alert={
  type: 'success',
  upermessage: '',
  lowermessage: ''
}
isalert=false

returnasset($event: MouseEvent) {

 const data={
    assetId: this.id,
  returnCondition: this.returncondition,
  notes: this.notes
  }
  this.isprocessing=true
  this.assetactionservice.returnasset(data).subscribe(res=>{
    this.isalert=true
    this.alert={
      type: 'success',
      upermessage: 'Asset returned successfully',
      lowermessage: ''
    }
    setTimeout(() => {
      this.isalert=false
    }, 2000);
    this.toogleaction('')
    this.isprocessing=false
      this.router.navigateByUrl('dashboard/asset')
  },error=>{
    this.isprocessing=false
    this.isalert=true
    this.alert={
      type: 'error',
      upermessage: 'Somthing went wrong',
      lowermessage: 'Asset Action failed'
    }
    setTimeout(() => {
      this.isalert=false
    }, 2000);
  }  )
}
retireasset(){
  const data={
    assetId: this.assetdetail.id,
    retirementReason: this.notes
  }  
  this.isprocessing=true

  this.assetactionservice.retireasset(data).subscribe(res=>{
    this.isalert=true
    this.alert={
      type: 'success',
      upermessage: 'Asset returned successfully',
      lowermessage: ''
    }
    setTimeout(() => {
      this.isalert=false
    }, 2000);
    this.router.navigateByUrl('dashboard/asset')
    this.toogleaction('')
    this.isprocessing=false
  }, error=>{
    console.log(error);
    this.isprocessing=false
    this.isalert=true
    this.alert={
      type: 'error',
      upermessage: 'Somthing went wrong',
      lowermessage: 'Asset Action failed'
    }
    setTimeout(() => {
      this.isalert=false
    }, 2000);
  }
)
}
sendforMaintainance(){
  const data={
    assetId: this.assetdetail.id,
    description: this.notes
  }
  this.isprocessing=true

  this.assetactionservice.sendformaintainance(data).subscribe(res=>{
    this.isalert=true
    this.alert={
      type: 'success',
      upermessage: 'Asset returned successfully',
      lowermessage: ''
    }
    setTimeout(() => {
      this.isalert=false
    }, 2000);
    this.router.navigateByUrl('dashboard/asset')
    this.toogleaction('')
    this.isprocessing=false
  }, error=>{
    console.log(error);
    this.isprocessing=false
    this.isalert=true
    this.alert={
      type: 'error',
      upermessage: 'Somthing went wrong',
      lowermessage: 'Asset Action failed'
    }
    setTimeout(() => {
      this.isalert=false
    }, 2000);
  } )

}
returnfrommaintainance(){
  const data={
    assetId: this.assetdetail.id,
    description: this.notes
  }
  console.log(data);
  this.isprocessing=true

  this.assetactionservice.returnfrommaintainance(data).subscribe(res=>{
    this.isalert=true
    this.alert={
      type: 'success',
      upermessage: 'Asset returned successfully',
      lowermessage: ''
    }
    setTimeout(() => {
      this.isalert=false
    }, 2000);
    this.router.navigateByUrl('dashboard/asset')
    this.toogleaction('')
    this.isprocessing=false
  }, error=>{
    console.log(error);
    this.isalert=true
    this.alert={
      type: 'error',
      upermessage: 'Somthing went wrong',
      lowermessage: 'Asset Action failed'
    }
    setTimeout(() => {
      this.isalert=false
    }, 2000);
  } )
}
  notes: any;
  requestId: any;
  assignasset($event: MouseEvent) {

    const data = {
      assignedToId: this.selectedUserId,
      assetId: this.assetdetail.id,
      notes: this.notes,
      requestId: this.requestId
    }
    this.isprocessing=true

    this.assetactionservice.assignasset(data).subscribe(res=>{
      this.isalert=true
      this.alert={
        type: 'success',
        upermessage: 'Asset returned successfully',
        lowermessage: ''
      }
      setTimeout(() => {
        this.isalert=false
      }, 2000);
      console.log(res);
      this.toogleaction('')
      this.isprocessing=false
      this.router.navigateByUrl('dashboard/asset')
    }, error=>{
      this.isprocessing=false
      this.isalert=true
      this.alert={
        type: 'error',
        upermessage: 'Somthing went wrong',
        lowermessage: 'Asset Action failed'
      }
      setTimeout(() => {
        this.isalert=false
      }, 2000);
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
selectaction=''
  isaction = false
  toogleaction(action:any) {
    this.selectaction=action
    this.isaction = !this.isaction
  }
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
      this.isprocessing=false

    }, error=>{
      this.isprocessing=false
    } )
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
