import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {

     user$! : Observable<User[]>;

      selectedPage: string;

  constructor(private userService: UserService,
  private router : Router) { }

  ngOnInit(): void {
          this.user$=this.userService.getAllUsers();
  }

   onViewUser() {
                this.router.navigateByUrl(`user-info-list`);
          }

          onViewAgent() {
                        this.router.navigateByUrl(`agent-info-list`);
                  }


             navigateToPage() {
               this.router.navigate([this.selectedPage]);
             }


}
