import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirthCertificateComponent } from './birth-certificate/birth-certificate.component';
import { HeaderComponent } from './header/header.component';
import { BirthCertificateListComponent } from './birth-certificate-list/birth-certificate-list.component';
import { SingleBirthCertificateComponent } from './single-birth-certificate/single-birth-certificate.component';
import { NewBirthCertificateComponent } from './new-birth-certificate/new-birth-certificate.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { EditBirthCertificateComponent } from './edit-birth-certificate/edit-birth-certificate.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginAdministratorComponent } from './login-administrator/login-administrator.component';
import { AgentDisplayComponent } from './agent-display/agent-display.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { SearchAgentInputComponent } from './search-agent-input/search-agent-input.component';
import { LoginAgentComponent } from './login-agent/login-agent.component';


@NgModule({
  declarations: [
    AppComponent,
    BirthCertificateComponent,
    HeaderComponent,
    BirthCertificateListComponent,
    SingleBirthCertificateComponent,
    NewBirthCertificateComponent,
    SearchInputComponent,
    EditBirthCertificateComponent,
    WelcomeComponent,
    LoginAdministratorComponent,
    AgentDisplayComponent,
    UserDisplayComponent,
    SearchAgentInputComponent,
    LoginAgentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
