import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterGuard } from './guards/register.guard';
import { AuthComponent } from './auth.component';
import { EmailAdressComponent } from './pages/email-adress/email-adress.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'email-adress', component: EmailAdressComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [RegisterGuard]
      },
      { path: '**', redirectTo: 'email-adress' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
