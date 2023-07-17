import { Injectable } from '@angular/core';
import { Agent } from '../model/agent.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

   //RECUPERER TOUS LES ACTES DE NAISSANCES ENREGISTRES
    getAllAgent(): Observable<Agent[]> {
         return this.http.get<Agent[]>('http://localhost:8080/agent/get_agents_details');
    }

    getRequest(): Observable<Agent[]>{
        return this.http.get<Agent[]>('http://localhost:8080/agent/getRequest');
    }

    loginAgent( email:string , identifier:string,password: string){

        let ConnectiionAgentAttempt = {
             email:email,
             password: password,
             identifier: identifier
        }
        console.log(ConnectiionAgentAttempt);
        return this.http.post<any>(`http://localhost:8080/agent/authenticate`,ConnectiionAgentAttempt);
    }

          addAgent( name: string,firstName: string,email:string,
                    password: string,phoneNumber:string,role:string){

               let RegisterAgentAttempt = {
                   name: name,
                   firstName: firstName,
                   email:email,
                   password: password,
                   phoneNumber:phoneNumber,
                   role:role
               }
               console.log(RegisterAgentAttempt);
               return this.http.post<any>(`http://localhost:8080/agent/agentRegistration`,RegisterAgentAttempt);
          }


}
