import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthCertificateComponent } from './birth-certificate/birth-certificate.component';
import { HeaderComponent } from './header/header.component';
import { BirthCertificateListComponent } from './birth-certificate-list/birth-certificate-list.component';
import { SingleBirthCertificateComponent } from './single-birth-certificate/single-birth-certificate.component';
import { NewBirthCertificateComponent } from './new-birth-certificate/new-birth-certificate.component';
import { EditBirthCertificateComponent } from './edit-birth-certificate/edit-birth-certificate.component';
import { LoginAdministratorComponent } from './login-administrator/login-administrator.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AgentDisplayComponent } from './agent-display/agent-display.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { LoginAgentComponent } from './login-agent/login-agent.component';

const routes: Routes = [
  {path: '', component:WelcomeComponent},
  {path: 'birthCertificateDisplay', component: BirthCertificateListComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'BirthCertificate/:id', component: SingleBirthCertificateComponent},
  {path: 'BirthCertificate', component: BirthCertificateListComponent},
  {path: 'newBirthCertificate', component:NewBirthCertificateComponent},
  {path: 'editBirthCertificate/:id', component:EditBirthCertificateComponent},
  {path: 'administratorLogin', component:LoginAdministratorComponent},
  {path: 'agent-info-list', component:AgentDisplayComponent},
  {path: 'user-info-list', component:UserDisplayComponent},
  {path: 'officer-login', component:LoginAgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
