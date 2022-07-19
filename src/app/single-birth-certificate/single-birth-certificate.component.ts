import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BirthCertificate } from '../model/birth-certificate.model';
import { BirthCertificateService } from '../services/birth-certificate.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-single-birth-certificate',
  templateUrl: './single-birth-certificate.component.html',
  styleUrls: ['./single-birth-certificate.component.scss']
})
export class SingleBirthCertificateComponent implements OnInit {

  @ViewChild('birth-container') htmlData!: ElementRef;

  birthCertificate!: BirthCertificate;
  birthCertificate$!: Observable<BirthCertificate>;

  constructor(private birthCertificateService: BirthCertificateService,
                 private route: ActivatedRoute) { }

  ngOnInit(): void {
        const bcId = +this.route.snapshot.params['id'];
        this.birthCertificate$ = this.birthCertificateService.getBirthCertificateById(bcId);
  }

  downloadAsPDF(){

        let DATA: any = document.getElementById('birth-container');
            html2canvas(DATA).then((canvas) => {
              let fileWidth = 150;
              let fileHeight = (canvas.height * fileWidth) / canvas.width;
              const FILEURI = canvas.toDataURL('image/png');
              let PDF = new jsPDF('p', 'mm', 'a5');
              let position = 0;
              PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
              PDF.save('angular-demo.pdf');
            });

  }

}
