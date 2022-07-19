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

    agent$! : Observable<Agent[]>;

           public readonly trackByName: (index:number, item: Agent) => string = (
              index: number,
              item: Agent
            ) => item.name;

          private readonly searchFilter: BehaviorSubject<string> = new BehaviorSubject('');

            private readonly searchText$: Observable<string> = this.searchFilter.asObservable();

  constructor(private agentService: AgentService,
  private router : Router) { }

  ngOnInit(): void {
        //this.agent$=this.agentService.getAllAgent();

             const listOfAgent$: Observable<Agent[]> = this.agentService.getAllAgent();
                        this.agent$ = combineLatest([listOfAgent$, this.searchText$]).pipe(
                          map(([list, search]: [Agent[], string]) =>
                            this.filterByName(list, search)
                          )
                        );


  }

     public search(value: string): void {
            this.searchFilter.next(value);
          }

          private filterByName(list: Agent[], searchTerm: string): Agent[] {
            if (searchTerm === '') return list;

            return list.filter(
              (item: Agent) =>
                item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                item.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            );
          }


  onViewUser() {
              this.router.navigateByUrl(`user-info-list`);
        }

        onViewAgent() {
                      this.router.navigateByUrl(`agent-info-list`);
                }

}
