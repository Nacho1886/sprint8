import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { NgprimeModule } from '../third-modules/ngprime.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './pages/list/list.component';
import { FileComponent } from './pages/file/file.component';
import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipCardComponent } from './pages/list/components/starship-card/starship-card.component';
import { RouterModule } from '@angular/router';
import { MainStarshipCardComponent } from './pages/file/components/main-starship-card/main-starship-card.component';
import { PilotsComponent } from './pages/file/components/pilots/pilots.component';
import { FilmsComponent } from './pages/file/components/films/films.component';
import { NumberToRomanPipe } from './pipes/number-to-roman.pipe';



@NgModule({
  declarations: [
    StarshipsComponent,
    ListComponent,
    FileComponent,
    StarshipCardComponent,
    MainStarshipCardComponent,
    PilotsComponent,
    FilmsComponent,
    NumberToRomanPipe

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
