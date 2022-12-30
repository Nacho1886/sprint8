import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    NavbarModule,
    LoadingComponent
  ]
})
export class SharedModule { }
