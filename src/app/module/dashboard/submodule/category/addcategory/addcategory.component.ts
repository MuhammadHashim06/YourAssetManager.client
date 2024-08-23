import { Component, OnInit } from '@angular/core';
import { constant } from '../../../../../core/constant/constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss'] // Fixed styleUrl -> styleUrls
})
export class AddcategoryComponent implements OnInit {
Update(arg0: number) {
  const data ={
    id: this.id,
  categoryName: this.categoryvalue.controls['categoryName'].value,
  description: this.categoryvalue.controls['description'].value,
  relaventInputFields: JSON.stringify(this.features)
  }
  this.service.updatecategory(data).pipe(catchError(error=>{
    if(error.status==400){
      alert('No changes Found')
      this.router.navigateByUrl('/dashboard/category');

          }
    return throwError(error)
  })).subscribe(res=>{
    
    this.router.navigateByUrl('/dashboard/category');
    
  })
}

  category:any
  constructor(private service: CategoryService, private router: Router, private activeroute:ActivatedRoute) {
    this.id=this.activeroute.snapshot.queryParams['id']
    console.log(this.id);
    
  }
  ngOnInit(): void {
    if(this.id!=undefined){
    this.service.getcategorybyid(this.id).subscribe(res=>{
      this.category=res.responseData
      console.log(this.category);
      this.categoryvalue.setValue(
        {
          categoryName:this.category.categoryName,
          description:this.category.description,
          relaventInputFields:this.category.relaventInputFields
        }
      )
      this.features=JSON.parse(this.category.relaventInputFields)
    })
  }
  }

  id=0
  inputerrormessages = constant.inputerrormessage;
  features: Array<any> = [];
  inputTypes = [
    "text",
    "date",
    "time",
    "datetime-local",
    "number",
    "email",
    "url",
    "tel",
    "color",
    "image"
  ];

  categoryvalue = new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    relaventInputFields: new FormControl('')
  });

  columnvalue = new FormGroup({
    inputType: new FormControl('', Validators.required),
    column: new FormControl('',Validators.required)
  });

  inputType: any;
  column: string = '';
  categoryname: any;
  description: any;

  addcolumn() {
    if (this.columnvalue.valid) {
      let name = this.columnvalue.controls['column'].value;
      let type = this.columnvalue.controls['inputType'].value;
      if (name) {
        name = name.replace(/\s+/g, "");
      }
      this.features.push({ label: this.columnvalue.controls['column'].value, type: type, name: name, value: '' });

      this.columnvalue.setValue({
        inputType: '',
        column: '' // Clear input field after adding
      });
      this.columnvalue.markAsUntouched();
    } else {
      this.columnvalue.markAllAsTouched();
    }
  }

  removecolumn(index: number) {
    this.features.splice(index, 1); // Remove the specific column by index
  }

  saveCategory() { 
    console.log(this.categoryvalue.valid);
    
    if (this.categoryvalue.valid) {
      console.log(this.features);

      // Set the 'relaventInputFields' form control value
      this.categoryvalue.controls['relaventInputFields'].setValue(JSON.stringify(this.features));
      console.log(this.categoryvalue.value);

      // Call the service to create the category
      this.service.createcategory(this.categoryvalue.value).pipe(
        catchError((error) => {
          console.error('Error occurred:', error);
          return throwError(() => error); // Properly handle the error
        })
      ).subscribe({
        next: (response: any) => {
          console.log('Category created successfully:', response);
          this.router.navigateByUrl('/dashboard/category');
        },
        error: (error) => {
          console.error('Failed to create category:', error);
        }
      });

      // Save features to local storage
      localStorage.setItem('features', JSON.stringify(this.features));

    } else {
      // Mark all form controls as touched to show validation errors
      this.categoryvalue.markAllAsTouched();
    }
  }

  Save($event: MouseEvent) {
    this.saveCategory(); // Now correctly calls saveCategory function
  }
}


// const name = this.column.replace(/\s+/g, "")
// console.log(name)