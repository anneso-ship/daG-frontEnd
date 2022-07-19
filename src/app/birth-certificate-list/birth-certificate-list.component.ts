import {ChangeDetectionStrategy,Component, Input, OnInit} from '@angular/core';
import { BirthCertificate } from '../model/birth-certificate.model';
import { BirthCertificateService } from '../services/birth-certificate.service';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map, filter} from 'rxjs/operators';
import { FormControl, FormBuilder } from '@angular/forms';





@Component({
  selector: 'app-birth-certificate-list',
  templateUrl: './birth-certificate-list.component.html',
  styleUrls: ['./birth-certificate-list.component.scss']
})
export class BirthCertificateListComponent implements OnInit {

      @Input()
      public birthCertificates: BirthCertificate[] = [];

      birthCertificate$! : Observable<BirthCertificate[]>;


       public readonly trackByName: (index:number, item: BirthCertificate) => string = (
          index: number,
          item: BirthCertificate
        ) => item.name;

      private readonly searchFilter: BehaviorSubject<string> = new BehaviorSubject('');

        private readonly searchText$: Observable<string> = this.searchFilter.asObservable();



      constructor(private birthCertificateService: BirthCertificateService) { }

      ngOnInit(): void {
            const listOfBirthCertificate$: Observable<BirthCertificate[]> = this.birthCertificateService.getAllBirthCertificate();
                this.birthCertificate$ = combineLatest([listOfBirthCertificate$, this.searchText$]).pipe(
                  map(([list, search]: [BirthCertificate[], string]) =>
                    this.filterByName(list, search)
                  )
                );
      }

       public search(value: string): void {
          this.searchFilter.next(value);
        }

        private filterByName(list: BirthCertificate[], searchTerm: string): BirthCertificate[] {
          if (searchTerm === '') return list;

          return list.filter(
            (item: BirthCertificate) =>
              item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
              item.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
              item.nameMum.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
              item.firstNameMum.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
              item.nameDad.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
              item.firstNameDad.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
          );
        }




}

