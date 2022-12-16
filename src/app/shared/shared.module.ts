import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { LoadingComponent } from './loading/loading.component';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    LoginModule
  ],
  exports: [
    NavbarModule,
    LoginModule,
    LoadingComponent
  ]
})
export class SharedModule { }
