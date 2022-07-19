import { Injectable } from '@angular/core';
import { BirthCertificate } from '../model/birth-certificate.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BirthCertificateService {

  myBirthCertificate!: BirthCertificate[];

  constructor(private http: HttpClient) { }

  //RECUPERER TOUS LES ACTES DE NAISSANCES ENREGISTRES
  getAllBirthCertificate(): Observable<BirthCertificate[]> {
                 //return this.myBirthCertificate;
       return this.http.get<BirthCertificate[]>('http://localhost:8080/getAllBirthCertificate');
  }

  //ACCEDER A UN ACTE DE NAISSANCE EN FONCTION DE L'ID
  getBirthCertificateById(bcId: number): Observable<BirthCertificate>  {
      return this.http.get<BirthCertificate>(`http://localhost:8080/getBirthCertificateById/${bcId}`);
  }

   //Créer un nouvel acte de naissance
   addBirthCertificate(formValue: {  name:string,firstName:string, gender:string,
                                     birthDate:Date, nationality:string, nameMum:string,
                                     firstNameMum:string, birthDateMum:Date,professionMum:string,
                                     nationalityMum:string, nameDad:String,firstNameDad:string,
                                     birthDateDad:Date, professionDad:string, nationalityDad:string }) {

            return this.http.post(`http://localhost:8080/newBirthCertificate`,formValue);
   }

   updatebirthcertificate(bcId: number,formValue: {  name:string,firstName:string, gender:string,
                                        birthDate:Date, nationality:string, nameMum:string,
                                        firstNameMum:string, birthDateMum:Date,professionMum:string,
                                        nationalityMum:string, nameDad:String,firstNameDad:string,
                                        birthDateDad:Date, professionDad:string, nationalityDad:string }){

            return this.http.put(`http://localhost:8080/updateBirthCertificate/${bcId}`,formValue);
   }


}
