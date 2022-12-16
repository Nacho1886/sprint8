import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { NgprimeModule } from '../third-modules/ngprime.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StarshipsComponent

  ],
  imports: [
    CommonModule,
    NgprimeModule,
    SharedModule
  ]
})
export class StarshipsModule { }
