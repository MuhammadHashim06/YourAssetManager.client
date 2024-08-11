import { Component } from '@angular/core';
import { constant } from '../../../../../core/constant/constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss'] // Fixed styleUrl -> styleUrls
})
export class AddcategoryComponent {

  constructor(private service: CategoryService, private router: Router) {}

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
    categoryName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    relaventInputFields: new FormControl('',)
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
    console.log('I am Callled')// Moved saveCategory out of Save method
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