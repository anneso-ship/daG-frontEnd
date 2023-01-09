import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrator } from '../model/administrator.model';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(private http: HttpClient) { }

   loginAdmin( identifier:string , password: string){

                 let Adminconnect = {
                     identifier:identifier,
                     password: password
                 }
                 console.log(Adminconnect);
                 return this.http.post<any>(`http://localhost:8080/administrator/login`,Adminconnect);
            }




}
