import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessionGuard } from './auth/guards/session.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canLoad: [SessionGuard],
    canActivate: [SessionGuard]
  },
  {
    path: 'starships',
    loadChildren: () => import('./starships/starships.module').then((m) => m.StarshipsModule),
    canLoad: [SessionGuard],
    canActivate: [SessionGuard]
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
