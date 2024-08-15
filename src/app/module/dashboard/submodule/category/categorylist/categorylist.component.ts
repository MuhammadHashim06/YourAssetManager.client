import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.scss'
})
export class CategorylistComponent implements OnInit {
  constructor(private service:CategoryService){}
  ngOnInit(): void {
    this.service.getcategory().pipe(
      catchError(error=>{
        return throwError(error)
      })
    ).subscribe(res=>{
      const feature = res.responseData.$values
      console.log(feature);
    })
  }
}
