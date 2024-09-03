import { Component, OnInit } from '@angular/core';
import { constant } from '../../../../../core/constant/constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../../../core/services/category/category.service';
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from '../../../../../shared/reusablecomponents/alert/alert.component';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss'], // Fixed styleUrl -> styleUrls
})
export class AddcategoryComponent implements OnInit {
  isalert = false;
  alert: Alert = {
    type: '',
    upermessage: '',
    lowermessage: '',
  };
  Update(arg0: number) {
    const data = {
      id: this.id,
      categoryName: this.categoryvalue.controls['categoryName'].value,
      description: this.categoryvalue.controls['description'].value,
      relaventInputFields: JSON.stringify(this.features),
    };
    this.service.updatecategory(data).subscribe(
      (res) => {
        (this.isalert = true),
          (this.alert.type = 'success'),
          (this.alert.upermessage = 'Added Successfully'),
          (this.alert.lowermessage = 'Vendor has been Added Successfully');
        setTimeout(() => {
          this.isalert = false;
          this.router.navigateByUrl('/dashboard/categories');
        }, 3000);
      },
      (error) => {
        this.isalert = true;

        if (error.status == 400) {
          (this.alert.type = 'warning'),
            (this.alert.upermessage = 'Update failed'),
            (this.alert.lowermessage = 'You have no updates');
        } else if (error.status == 401) {
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
          this.router.navigateByUrl('/dashboard/categories');
        }, 3000);
      }
    );
  }

  category: any;
  constructor(
    private service: CategoryService,
    private router: Router,
    private activeroute: ActivatedRoute
  ) {
    this.id = this.activeroute.snapshot.queryParams['id'];
    console.log(this.id);
  }
  ngOnInit(): void {
    if (this.id != undefined) {
      this.service.getcategorybyid(this.id).subscribe((res) => {
        this.category = res.responseData;
        console.log(this.category);
        this.categoryvalue.setValue({
          categoryName: this.category.categoryName,
          description: this.category.description,
          relaventInputFields: this.category.relaventInputFields,
        });
        this.features = JSON.parse(this.category.relaventInputFields);
      });
    }
  }

  id = 0;
  inputerrormessages = constant.inputerrormessage;
  features: Array<any> = [];
  inputTypes = [
    'text',
    'date',
    'time',
    'datetime-local',
    'number',
    'email',
    'url',
    'tel',
    'color',
    'image',
  ];

  categoryvalue = new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    relaventInputFields: new FormControl(''),
  });

  columnvalue = new FormGroup({
    inputType: new FormControl(''),
    column: new FormControl('', Validators.required),
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
        name = name.replace(/\s+/g, '');
      }
      this.features.push({
        label: this.columnvalue.controls['column'].value,
        name: name,
        value: '',
      });

      this.columnvalue.setValue({
        inputType: '',
        column: '', // Clear input field after adding
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
      this.categoryvalue.controls['relaventInputFields'].setValue(
        JSON.stringify(this.features)
      );
      console.log(this.categoryvalue.value);

      // Call the service to create the category
      this.service
        .createcategory(this.categoryvalue.value)
        .pipe(
          catchError((error) => {
            console.error('Error occurred:', error);
            return throwError(() => error); // Properly handle the error
          })
        )
        .subscribe({
          next: (response: any) => {
            this.isalert = true;
            (this.alert.type = 'success'),
              (this.alert.upermessage = 'Added Successfully'),
              (this.alert.lowermessage = 'Vendor has been Added Successfully');
            setTimeout(() => {
              this.isalert = false;
              this.router.navigateByUrl('/dashboard/categories');
            }, 3000);
            console.log('Category created successfully:', response);
          },
          error: (error) => {
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
          },
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
