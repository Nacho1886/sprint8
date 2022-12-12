import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { NavbarDesktopComponent } from './navbar-desktop/navbar-desktop.component';
import { NavbarComponent } from './navbar.component';
import { NgprimeModule } from 'src/app/third-modules/ngprime.module';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarDesktopComponent,
    NavbarMobileComponent
  ],
  imports: [
    CommonModule,
    NgprimeModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
