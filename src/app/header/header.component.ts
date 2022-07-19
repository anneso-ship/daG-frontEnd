import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { BirthCertificateService } from '../services/birth-certificate.service';

import { BirthCertificate } from '../model/birth-certificate.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    searchCtrl!: FormControl;
     birthCertificate$! : Observable<BirthCertificate[]>;
    searchCtrlType!:FormControl;


    constructor(private birthCertificateService: BirthCertificateService,
    private formBuilder: FormBuilder) { }

      ngOnInit(): void {
            this.initObservables();
            this.searchCtrl = this.formBuilder.control('');
            this.searchCtrlType = this.formBuilder.control('');

      }

      private initObservables(){
          this.birthCertificate$=this.birthCertificateService.getAllBirthCertificate();
      }

}
