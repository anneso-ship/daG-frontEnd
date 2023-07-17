import { Component, OnInit } from '@angular/core';
import { Agent } from '../model/agent.model';
import { AgentService } from '../services/agent.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.scss']
})
export class RegisterAgentComponent implements OnInit {

    name:string;
    firstName:string;
    email:string;
    role:string;
    phoneNumber:string;
    password:string;
    password_copy:string;
    error : boolean;
    error_passwordCompare:boolean;

  constructor(private agentService: AgentService,private router:Router) { }

  ngOnInit(): void {
  }

     registrationAgent(registerForm:any) {
            if(this.password == this.password_copy){
               this.agentService.addAgent(this.name,this.firstName,this.email,this.role,this.phoneNumber,this.password).subscribe(
                           (agent)=>{
                             this.router.navigateByUrl("loginAgent")
                             console.log(agent);
                           },
                           (error)=>{
                             this.error=true;
                             console.log(error);
                           }
                         )
            }
            else{
              this.error_passwordCompare=true;
              console.log(this.error_passwordCompare);
              console.log("Les mots de passe ne sont pas identiques");
            }


      }





}
