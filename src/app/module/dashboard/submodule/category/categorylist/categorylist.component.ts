import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { catchError, throwError } from 'rxjs';

export interface Icategories {
  id:number
  categoryName:string,
  description:string,
  relaventInputFields:any
}


@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.scss'
})
export class CategorylistComponent implements OnInit {

  getcategories(){
    this.service.getcategory().pipe(
      catchError(error => {
        return throwError(error)
      })
    ).subscribe(res => {
      this.categories = res.responseData.$values
      for (let index = 0; index < this.categories.length; index++) {
        this.categories[index].relaventInputFields=JSON.parse(this.categories[index].relaventInputFields) 
        console.log(this.categories[index].relaventInputFields);
        
      }
    })
  }
edit(arg0: number) {
throw new Error('Method not implemented.');
}
delete(id:number) {
  this.service.deletecategory(id).pipe(
    catchError(error=>{
      return throwError(error)
    })
  ).subscribe(res=>{
    this.getcategories()
    console.log(res);
    
  })
}
  constructor(private service: CategoryService) { }
  categories:Array<Icategories>=[]
  ngOnInit(): void {
   this.getcategories()
  }
}
