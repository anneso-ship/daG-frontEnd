import { Component, OnInit } from '@angular/core';
import { AuthAdminService } from '../services/auth-admin.service';



import { Router } from '@angular/router';
import { Administrator } from '../model/administrator.model';


@Component({
  selector: 'app-login-administrator',
  templateUrl: './login-administrator.component.html',
  styleUrls: ['./login-administrator.component.scss']
})
export class LoginAdministratorComponent implements OnInit {

    identifier:string;
       password:string;
       error:boolean;


  constructor(private auth:AuthAdminService,private router:Router) { }

  ngOnInit(): void {
  }

   login(loginForm:any){
        this.auth.loginAdmin(this.identifier,this.password).subscribe(
          (agent)=>{
              this.router.navigateByUrl("agent-info-list")
          },
          (error)=>{
              this.error=true;
          }
        )
      }



}
