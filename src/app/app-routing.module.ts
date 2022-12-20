import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./starships/starships.module').then((m) => m.StarshipsModule),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
