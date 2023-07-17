import { Component, OnInit ,Input} from '@angular/core';
import { Agent } from '../model/agent.model';
import { AgentService } from '../services/agent.service';

import { Router } from '@angular/router';

import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map, filter} from 'rxjs/operators';
import { FormControl, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-agent-display',
  templateUrl: './agent-display.component.html',
  styleUrls: ['./agent-display.component.scss']
})
export class AgentDisplayComponent implements OnInit {

    @Input()
    public agents: Agent[] = [];

    selectedPage: string;


    agent$! : Observable<Agent[]>;


  constructor(private agentService: AgentService,
  private router : Router) { }

  ngOnInit(): void {
        this.agent$=this.agentService.getAllAgent();



  }

  navigateToPage() {
    this.router.navigate([this.selectedPage]);
  }




  onViewUser() {
              this.router.navigateByUrl(`user-info-list`);
        }

        onViewAgent() {
                      this.router.navigateByUrl(`agent-info-list`);
                }

}
