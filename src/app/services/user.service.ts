import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //RECUPERER TOUS LES ACTES DE NAISSANCES ENREGISTRES
      getAllUsers(): Observable<User[]> {
           return this.http.get<User[]>('http://localhost:8080/users/get_users_details');
      }


}
