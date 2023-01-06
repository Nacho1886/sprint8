import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgprimeModule } from 'src/app/third-modules/ngprime.module';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { PipesAuthModule } from './pipes/pipes-auth.module';
import { EmailComponent } from './components/email/email.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './auth.component';
import { EmailAdressComponent } from './pages/email-adress/email-adress.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RegionComponent } from './components/region/region.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent, 
    RegisterComponent,
    EmailComponent,
    HeaderComponent,
    EmailAdressComponent,
    PrivacyPolicyComponent,
    RegionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgprimeModule,
    AuthRoutingModule,
    SharedModule,
    PipesAuthModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
