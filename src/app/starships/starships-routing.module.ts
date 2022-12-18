import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipsComponent } from './starships.component';
import { ListComponent } from './pages/list/list.component';
import { FileComponent } from './pages/file/file.component';

const routes: Routes = [
  {
    path: '',
    component: StarshipsComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: ':id', component: FileComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StarshipsRoutingModule { }
