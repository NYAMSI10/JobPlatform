import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {JobComponent} from "./pages/job/job.component";
import {CompanyComponent} from "./pages/company/company.component";
import {HeaderComponent} from "./pages/header/header.component";

export const routes: Routes = [
  { path: 'home', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'jobs', component: JobComponent},
  {path: 'company', component: CompanyComponent},
  {path: '',redirectTo: 'home' , pathMatch: 'full'},
  {path: '**',redirectTo:'home', pathMatch:'full'},


];
