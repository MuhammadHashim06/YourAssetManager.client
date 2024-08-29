import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Alert } from '../../../../../shared/reusablecomponents/alert/alert.component';

export interface Icategories {
  id: number
  categoryName: string,
  description: string,
  relaventInputFields: any
}


@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.scss'
})
export class CategorylistComponent implements OnInit {

  private router = inject(Router)
  dataload = false
  isalert=false
  alert: Alert = {
    type: '',
    upermessage:'',
    lowermessage:''
  };
  getcategories() {
    this.dataload = false
    this.service.getcategory().subscribe(res => {
      this.dataload = true
      if (res.status == 404) {
        this.categories = []
      }
      else {
        this.categories = res.responseData.$values
        
        for (let index = 0; index < this.categories.length; index++) {
          this.categories[index].relaventInputFields = JSON.parse(this.categories[index].relaventInputFields)
        }
      }

    }, error=>{
      this.dataload = true
    })
  }
  edit(arg0: number) {
    this.router.navigateByUrl(`dashboard/categories/add?id=${arg0}`)
  }
  delete(id: number) {
    this.dataload = false
    this.service.deletecategory(id).subscribe(res => {
      this.isalert = true;
      this.alert.type='success'
        this.alert.upermessage = 'Deleted Success',
        this.alert.lowermessage = 'Catrgory Deleted Successfully'
      
   setTimeout(() => {
    this.isalert=false
   }, 3000);
      this.getcategories()

    }, error =>{
      this.dataload = true
      this.isalert=true
    this.alert.type='error'
      if(error.status==405){
        this.alert.type='warning'
        this.alert.upermessage = 'Delete Failed',
        this.alert.lowermessage = 'Category is already in use'
      }else{
        this.alert.type='error'
        this.alert.upermessage = 'Something went wrong',
        this.alert.lowermessage = 'Please try again Later'
      }
   setTimeout(() => {
    this.isalert=false
   }, 3000);
    })
  }
  constructor(private service: CategoryService) { }
  categories: Array<Icategories> = []
  ngOnInit(): void {
    this.getcategories()
  }
}
