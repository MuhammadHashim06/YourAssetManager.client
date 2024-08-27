import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

import { OrganizationService } from '../../../core/services/organization/organization.service';
import { constant } from '../../../core/constant/constant';

@Component({
  selector: 'app-updateorganization',
  templateUrl: './updateorganization.component.html',
  styleUrls: ['./updateorganization.component.scss'] // Corrected the property name
})
export class UpdateorganizationComponent implements OnInit {
  // Inject dependencies
  private router = inject(Router);
  private OrganizationService = inject(OrganizationService);

  // Constants
  inputerrormessage = constant.inputerrormessage;

  // Data properties
  ownerData: any;
  organizationdata: any;

  // Form controls
  organization = new FormGroup({
    organizationName: new FormControl<string>('', Validators.required),
    OrganizationDomains: new FormArray<FormControl<string>>([], Validators.required),
    description: new FormControl<string>('', Validators.required)
  });

  // Additional properties
  domains: string[] = [];
  domainInput: string = '';

  constructor() {}

  ngOnInit(): void {
    // Fetch organization data on component initialization
    this.OrganizationService.getOrganization().pipe().subscribe(res => {
      this.organizationdata = res.responseData.organizations;
      this.organization.controls.organizationName.setValue(this.organizationdata.organizationName)
      this.organization.controls.description.setValue(this.organizationdata.description)
      this.domains=this.organizationdata.organizationDomains.$values
      for(let d of this.domains){
        const domainControl = new FormControl<string>(d, Validators.required);

        (this.organization.controls['OrganizationDomains'] as FormArray).push(domainControl);
      }
    });

    // Uncomment and use session storage if needed
    // this.ownerData = sessionStorage.getItem('ownerdata');
    // if (this.ownerData != undefined) {
    //   this.ownerData = JSON.parse(this.ownerData);
    // }
  }

  // Add domain chip
  addChip(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.domainInput.trim()) {
      const domainControl = new FormControl<string>(this.domainInput.trim(), Validators.required);
      (this.organization.controls['OrganizationDomains'] as FormArray).push(domainControl);
      this.domains.push(this.domainInput.trim());
      this.domainInput = '';
    }
  }

  // Remove domain chip
  removeChip(index: number): void {
    this.domains.splice(index, 1);
    (this.organization.controls['OrganizationDomains'] as FormArray).removeAt(index);
  }

  // Save organization data
  Save($event: MouseEvent): void {
    $event.preventDefault();
    console.log(this.organization.value);

    if (this.organization.valid) {
      this.OrganizationService.updateorganziation(this.organization.value).pipe(
        catchError(error => throwError(error))
      ).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/dashboard');
      });
    } else {
      this.organization.markAllAsTouched();
    }
  }
}
