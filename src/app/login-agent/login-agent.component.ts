import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../model/agent.model';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-login-agent',
  templateUrl: './login-agent.component.html',
  styleUrls: ['./login-agent.component.scss']
})
export class LoginAgentComponent implements OnInit {

       email:string;
       password:string;
       identifier: string;
       error:boolean;


  constructor(private agentService:AgentService,
                private router:Router) { }

  ngOnInit(): void {
  }

    login_agent(loginForm:any){
          this.agentService.loginAgent(this.email,this.identifier,this.password).subscribe(
            (agent)=>{
                this.router.navigateByUrl("birthCertificateDisplay")
            },
            (error)=>{
                this.error=true;
            }
          )
        }

}
