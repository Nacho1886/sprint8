import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { NgprimeModule } from '../third-modules/ngprime.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './pages/list/list.component';
import { FileComponent } from './pages/file/file.component';
import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipCardComponent } from './components/starship-card/starship-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StarshipsComponent,
    ListComponent,
    FileComponent,
    StarshipCardComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgprimeModule,
    StarshipsRoutingModule,
    SharedModule,
  ]
})
export class StarshipsModule { }
