import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-agent-input',
  templateUrl: './search-agent-input.component.html',
  styleUrls: ['./search-agent-input.component.scss']
})
export class SearchAgentInputComponent implements OnInit ,OnDestroy {



  constructor() {

  }

   docSaved : number;

      @Output()
      public onSearch: EventEmitter<string> = new EventEmitter<string>();

      public searchControl: FormControl = new FormControl('');
      private readonly searchSubscription: Subscription = new Subscription();

  ngOnInit(): void {
          const searchInput$ = this.searchControl.valueChanges
                      .pipe(distinctUntilChanged(), debounceTime(300))
                      .subscribe((text: string) => {
                        this.onSearch.emit(text);
                      });

                    this.searchSubscription.add(searchInput$);

  }

   public ngOnDestroy(): void {
        this.searchSubscription.unsubscribe();
      }




}
