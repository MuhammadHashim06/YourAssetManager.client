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
onUserInput($event: Event) {
throw new Error('Method not implemented.');
}
  id: any;
  assetdetail: any='-1';
  notes: any='';
  requestId: any="";
  selectedUserId = '';
  returncondition: any;
  isprocessing = false;
  isLoading = true;
  isalert = false;
  alert: Alert = {
    type: 'success',
    upermessage: '',
    lowermessage: '',
  };
  allusers: Array<any> = [];
  relevatcategoriesinput: Array<any> = [];
  selectaction = '';
  isaction = false;
  router = inject(Router);

  constructor(
    private activedroute: ActivatedRoute,
    private assetservice: AssetService,
    private userservice: UserService,
    private assetactionservice: AssetactionsService
  ) {
    this.id = this.activedroute.snapshot.params['id'];
    this.loadAssetDetails();
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private loadAssetDetails() {
    this.assetservice.getassetbyid(this.id).subscribe(
      (res) => {
        this.isLoading = false;
        this.assetdetail = res.responseData;
        this.relevatcategoriesinput = JSON.parse(this.assetdetail.catagoryReleventFeildsData);
        if (typeof this.relevatcategoriesinput === 'string') {
          this.relevatcategoriesinput = JSON.parse(this.assetdetail.catagoryReleventFeildsData);
        }
      },
      (error) => {
        this.isLoading = false;
        console.error('Error loading asset details:', error);
      }
    );
  }

  private getAllUsers() {
    this.userservice.getalluserS().subscribe(
      (res) => {
        this.allusers = res.responseData.$values;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  private handleActionSuccess(message: string) {
    this.isalert = true;
    this.alert = {
      type: 'success',
      upermessage: message,
      lowermessage: '',
    };
    setTimeout(() => {
      this.isalert = false;
    }, 2000);
    this.router.navigateByUrl('dashboard/asset');
    this.toogleaction('');
    this.isprocessing = false;
  }

  private handleActionError(message: string) {
    this.isalert = true;
    this.alert = {
      type: 'error',
      upermessage: 'Something went wrong',
      lowermessage: message,
    };
    setTimeout(() => {
      this.isalert = false;
    }, 2000);
    this.isprocessing = false;
  }

  returnasset($event: MouseEvent) {
    const data = {
      assetId: this.id,
      returnCondition: this.returncondition,
      notes: this.notes,
    };
    if(data.returnCondition!=undefined && data.returnCondition!='' && data.notes!=''){
      this.isprocessing = true;
      this.assetactionservice.returnasset(data).subscribe(
        () => this.handleActionSuccess('Asset returned successfully'),
        (error) => this.handleActionError('Asset Action failed')
      );
    }else{
      this.isalert=true
      this.alert={
        type:'warning',
        upermessage:'Warning',
        lowermessage:'Please fill all the fields'
      }
      setTimeout(() => {
        this.isalert=false
      }, 2000);
    }
    
  }

  retireasset() {
    const data = {
      assetId: this.assetdetail.id,
      retirementReason: this.notes,
    };
    if(data.retirementReason!=''){
      this.isprocessing = true;
      this.assetactionservice.retireasset(data).subscribe(
        () => this.handleActionSuccess('Asset retired successfully'),
        (error) => this.handleActionError('Asset retirement failed')
      );
    }else{
      this.isalert=true;
      this.alert = {
        type: 'warning',
        upermessage: 'Warning',
        lowermessage: 'Please enter retirement reason',
      }
      setTimeout(() => {
        this.isalert=false
      }, 2000);
    }
    
  }

  sendforMaintainance() {
    const data = {
      assetId: this.assetdetail.id,
      description: this.notes,
    };
    


    if(data.description!=''){
      this.isprocessing = true;
    this.assetactionservice.sendformaintainance(data).subscribe(
      () => this.handleActionSuccess('Asset sent for maintenance'),
      (error) => this.handleActionError('Asset maintenance failed')
    );
    }else{
      this.isalert=true;
      this.alert = {
        type: 'warning',
        upermessage: 'Warning',
        lowermessage: 'Please fill all the fields',
      }
      setTimeout(() => {
        this.isalert=false
      }, 2000);
    }
  }

  returnfrommaintainance() {
    const data = {
      assetId: this.assetdetail.id,
      description: this.notes,
    };
    if(data.description!=''){
      this.isprocessing = true;
      this.assetactionservice.returnfrommaintainance(data).subscribe(
        () => this.handleActionSuccess('Asset returned from maintenance'),
        (error) => this.handleActionError('Asset return failed')
      );
    }else{
      this.isalert=true;
      this.alert = {
        type: 'warning',
        upermessage: 'Warning',
        lowermessage: 'Please fill all the fields',
      }
      setTimeout(() => {
        this.isalert=false
      }, 2000);
    }
    
  }

  assignasset($event: MouseEvent) {
    const data = {
      assignedToId: this.selectedUserId,
      assetId: this.assetdetail.id,
      notes: this.notes,
      requestId: this.requestId,
    };

    if(data.notes!='' && data.assignedToId=='' && data.requestId!=''){
      this.isprocessing = true;
    this.assetactionservice.assignasset(data).subscribe(
      () => this.handleActionSuccess('Asset assigned successfully'),
      (error) => this.handleActionError('Asset assignment failed')
    );
    }else{
      this.isalert=true;
      this.alert = {
        type: 'warning',
        upermessage: 'Warning',
        lowermessage: 'Please fill all the fields',
      }
      setTimeout(() => {
        this.isalert=false
      }, 2000);
    }

    
  }

  updateasset(assetId: any) {
    this.router.navigateByUrl(`dashboard/asset/create/${assetId}`);
  }

  deleteasset(assetId: any) {
    this.assetservice.deleteasset(assetId).subscribe(
      () => {
        this.updateassetdata();
        this.router.navigateByUrl('dashboard/asset');
      },
      (error) => console.error('Error deleting asset:', error)
    );
  }

  updateassetdata() {
    this.assetservice.updategetdata().subscribe(
      (data) => {
        this.isprocessing = false;
      },
      (error) => {
        this.isprocessing = false;
        console.error('Error updating asset data:', error);
      }
    );
  }

  onUserChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const selectedUserName = input.value;
    const user = this.allusers.find((u) => u.userName === selectedUserName);
    this.selectedUserId = user ? user.id : null;
  }

  stoppropagation($event: MouseEvent) {
    $event.stopPropagation();
  }

  toogleaction(action: any) {
    this.selectaction = action;
    this.isaction = !this.isaction;
  }

  setreturncondition(event: any) {
    this.returncondition = event.target.value;
  }
}
