import { Component, OnInit } from '@angular/core';
import { BirthCertificate } from '../model/birth-certificate.model';
import { BirthCertificateService } from '../services/birth-certificate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-birth-certificate',
  templateUrl: './edit-birth-certificate.component.html',
  styleUrls: ['./edit-birth-certificate.component.scss']
})
export class EditBirthCertificateComponent implements OnInit {

    birthCertificate$!: Observable<BirthCertificate>;


  constructor(private birthCertificateService: BirthCertificateService,
                               private router: ActivatedRoute,
                               private route : Router) { }

  ngOnInit(): void {
          const bcId = +this.router.snapshot.params['id'];
                this.birthCertificate$ = this.birthCertificateService.getBirthCertificateById(bcId);
  }

  update(editFormBirthCertificate: NgForm ){
        const bcId = +this.router.snapshot.params['id'];
        this.birthCertificateService.updatebirthcertificate(bcId,editFormBirthCertificate.value).pipe(
                        tap(() => this.route.navigateByUrl(''))
                    ).subscribe();
        console.log(editFormBirthCertificate.value);
  }

}
