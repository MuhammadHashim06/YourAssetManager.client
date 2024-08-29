import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { AssettypeService } from '../../../../../core/services/assettype/assettype.service';
import { constant } from '../../../../../core/constant/constant';
import { Alert } from '../../../../../shared/reusablecomponents/alert/alert.component';

@Component({
  selector: 'app-typelist',
  templateUrl: './typelist.component.html',
  styleUrls: ['./typelist.component.scss'] // Fixed 'styleUrl' to 'styleUrls'
})
export class TypelistComponent implements OnInit {
  // Form and data related properties
  isalert=false
  alert: Alert = {
    type: '',
    upermessage:'',
    lowermessage:''
  };
  assettype: FormGroup;
  type: Array<any> = [];
  isadd = false;
  id = 0;
  inputerrormessages = constant.inputerrormessage;
dataload=false;

  constructor(private service: AssettypeService) {
    // Initialize form group
    this.assettype = new FormGroup({
      assetTypeName: new FormControl('', Validators.required),
      description: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.getassettype();
  }

  // Methods
  getassettype(): void {
    this.dataload=false
    this.service.getallassettype().pipe(
      catchError(error => throwError(error))
    ).subscribe(res => {
      if(res.status==404){
        this.type=[]
      }else{
        this.type = res.responseData.$values;
      }
      this.dataload=true

    });
  }

  savetype(): void {
    if (this.assettype.valid) {

      this.isadd = false;
      this.service.addassettype(this.assettype.value).subscribe(res => {
        this.dataload=false
        console.log(res);
        this.isalert = true;
        this.alert.type='success'
          this.alert.upermessage = 'Add Success',
          this.alert.lowermessage = 'Asset type Added Successfully'
     setTimeout(() => {
      this.isalert=false
     }, 3000);
        this.assettype.reset(); // Reset form after successful addition
        this.getassettype();
      }, error=>{
        this.isalert = true;
        if (error.status == 401) {
          (this.alert.type = 'error'),
            (this.alert.upermessage = 'Unauthorized'),
            (this.alert.lowermessage = 'You donot have Permission');
        } else {
          (this.alert.type = 'error'),
            (this.alert.upermessage = 'Something went wrong'),
            (this.alert.lowermessage = 'Pleasr try again later');
        }
        setTimeout(() => {
          this.isalert = false;
        }, 3000);
        this.assettype.reset()
      } );
    } else {
      this.assettype.markAllAsTouched();
    }
  }

  updateType(): void {
    const data = {
      id: this.id,
      assetTypeName: this.assettype.controls['assetTypeName'].value,
      description: this.assettype.controls['description'].value
    };
    this.service.updateAssetType(data).pipe().subscribe(() => {
      this.isadd = false;
      this.dataload=false

      this.id = 0;
      this.assettype.reset()
      this.getassettype();
      this.isalert = true;
      this.alert.type='success'
        this.alert.upermessage = 'Update Success',
        this.alert.lowermessage = 'Update Asset type Successfully'
   setTimeout(() => {
    this.isalert=false
   }, 3000);
    }, error=>{
      this.isalert = true;
      if (error.status == 401) {
        (this.alert.type = 'error'),
          (this.alert.upermessage = 'Unauthorized'),
          (this.alert.lowermessage = 'You donot have Permission');
      } else {
        (this.alert.type = 'error'),
          (this.alert.upermessage = 'Something went wrong'),
          (this.alert.lowermessage = 'Pleasr try again later');
      }
      setTimeout(() => {
        this.isalert = false;
      }, 3000);
    } );
  }

  delete(id: number): void {
    this.service.deleteassettype(id).subscribe(() => {
      this.isalert = true;
      this.alert.type='success'
        this.alert.upermessage = 'Deleted Success',
        this.alert.lowermessage = 'Vendor Deleted Successfully'
   setTimeout(() => {
    this.isalert=false
   }, 3000);
      this.getassettype();
    }, error=>{
      this.isalert=true
      this.alert.type='error'
        if(error.status==405){
          this.alert.type='warning'
          this.alert.upermessage = 'Delete Failed',
          this.alert.lowermessage = 'Asset type is already in use'
        }else{
          this.alert.type='error'
          this.alert.upermessage = 'Something went wrong',
          this.alert.lowermessage = 'Please try again Later'
        }
     setTimeout(() => {
      this.isalert=false
     }, 3000);
    } );
  }

  edit(index: number): void {
    this.id = index;
    this.isadd = true;
    const asset = this.type.find(t => t.id === index);
    if (asset) {
      this.assettype.setValue({
        assetTypeName: asset.assetTypeName,
        description: asset.description
      });
    }
  }

  addnewfield(): void {
    this.isadd = true;
  }

  cancel(): void {
    this.isadd = false;
    this.id = 0;
    this.assettype.reset();
  }
}
