import { Component, inject, OnInit } from '@angular/core';
import { OrganizationService } from '../../../core/services/organization/organization.service';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { constant } from '../../../core/constant/constant';

@Component({
  selector: 'app-updateorganization',
  templateUrl: './updateorganization.component.html',
  styleUrl: './updateorganization.component.scss'
})
export class UpdateorganizationComponent implements OnInit {
  router = inject(Router);
  inputerrormessage = constant.inputerrormessage;
  ownerData:any
  organizationdata:any
  constructor(private OrganizationService: OrganizationService) {}
  ngOnInit(): void {
    this.OrganizationService.getOrganization().pipe().subscribe(res=>{
      this.organizationdata = res.responceData
    })
  // this.ownerData  = sessionStorage.getItem('ownerdata')
  // if(this.ownerData!=undefined){
  //   this.ownerData = JSON.parse(this.ownerData)
  // }
  }

  // Explicitly define the type of the FormArray
  organization = new FormGroup({
    organizationName: new FormControl<string>('', Validators.required),
    OrganizationDomains: new FormArray<FormControl<string>>([], Validators.required),
    description: new FormControl<string>('', Validators.required)
  });

  domains: string[] = [];
  domainInput: string = '';

  addChip(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.domainInput.trim()) {
      const domainControl = new FormControl<string>(this.domainInput.trim(), Validators.required);
      (this.organization.controls['OrganizationDomains'] as FormArray).push(domainControl);
      this.domains.push(this.domainInput.trim());
      this.domainInput = '';
    }
  }

  removeChip(index: number): void {
    this.domains.splice(index, 1);
    (this.organization.controls['OrganizationDomains'] as FormArray).removeAt(index);
  }

  Save($event: MouseEvent) {
    $event.preventDefault();
    console.log(this.organization.value);

    if (this.organization.valid) {
      this.OrganizationService.setOrganization(this.organization.value).pipe(
        catchError(error => {
          return throwError(error);
        })
      ).subscribe(res => {
        console.log(res.responceData);
        this.router.navigateByUrl('/dashboard');
      });
    } else {
      this.organization.markAllAsTouched();
    }
  }
}
