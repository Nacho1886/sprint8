import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { LoadingComponent } from './loading/loading.component';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    AuthModule
  ],
  exports: [
    NavbarModule,
    AuthModule,
    LoadingComponent
  ]
})
export class SharedModule { }
