import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { BirthCertificate } from '../model/birth-certificate.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { BirthCertificateService } from '../services/birth-certificate.service';

@Component({
  selector: 'app-new-birth-certificate',
  templateUrl: './new-birth-certificate.component.html',
  styleUrls: ['./new-birth-certificate.component.scss']
})
export class NewBirthCertificateComponent implements OnInit {

   birthCertificateForm!: FormGroup;
   birthCertificatePreview$!: Observable<BirthCertificate>;

  constructor(private formBuilder: FormBuilder,
  private birthCertificateService : BirthCertificateService,
  private router : Router) { }

  ngOnInit(): void {
         this.birthCertificateForm = this.formBuilder.group({

                name:[null, [Validators.required]],
                firstName:[null, [Validators.required]],
                gender:[null, [Validators.required]],
                birthDate:[null, [Validators.required]],
                nationality:[null, [Validators.required]],
                nameMum:[null, [Validators.required]],
                firstNameMum:[null, [Validators.required]],
                birthDateMum:[null, [Validators.required]],
                professionMum:[null, [Validators.required]],
                nationalityMum:[null, [Validators.required]],
                nameDad:[null, [Validators.required]],
                firstNameDad:[null, [Validators.required]],
                birthDateDad:[null, [Validators.required]],
                professionDad:[null, [Validators.required]],
                nationalityDad:[null, [Validators.required]],
         });
          this.birthCertificatePreview$ = this.birthCertificateForm.valueChanges.pipe(
                         map(formValue => ({
                             ...formValue,
                             id: 0
                         }))
                     );
  }

  onSubmitForm() {
      console.log(this.birthCertificateForm.value);

      this.birthCertificateService.addBirthCertificate(this.birthCertificateForm.value).pipe(
                tap(() => this.router.navigateByUrl(''))
            ).subscribe();
      this.router.navigateByUrl(``);
  }




}
