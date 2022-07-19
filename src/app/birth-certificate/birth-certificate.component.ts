import { Component ,OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { BirthCertificate } from '../model/birth-certificate.model';
import { BirthCertificateService } from '../services/birth-certificate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birth-certificate',
  templateUrl: './birth-certificate.component.html',
  styleUrls: ['./birth-certificate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BirthCertificateComponent implements OnInit  {

    @Input() birthCertificate!: BirthCertificate;


  constructor(private birthCertificateService : BirthCertificateService,
  private router : Router) { }

    ngOnInit(): void{
    }

      onViewBirthCertificate() {
            this.router.navigateByUrl(`BirthCertificate/${this.birthCertificate.id}`);
      }

      onEditBirthCertificate() {
                  this.router.navigateByUrl(`editBirthCertificate/${this.birthCertificate.id}`);
      }




}
