import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../services/agent.service';
import { Agent } from '../model/agent.model';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-list-agent-request',
  templateUrl: './list-agent-request.component.html',
  styleUrls: ['./list-agent-request.component.scss']
})
export class ListAgentRequestComponent implements OnInit {

 @Input()
    public agents: Agent[] = [];

    selectedPage: string;


    agent$! : Observable<Agent[]>;

  constructor(private router : Router,
            private agentService: AgentService) { }

  ngOnInit(): void {
        this.agent$=this.agentService.getRequest();
  }

 navigateToPage() {
    this.router.navigate([this.selectedPage]);
  }

}
