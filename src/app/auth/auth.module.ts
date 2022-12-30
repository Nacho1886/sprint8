import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgprimeModule } from 'src/app/third-modules/ngprime.module';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    CommonModule,
    NgprimeModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
