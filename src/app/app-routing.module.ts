import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuestGuard } from './auth/guards/guest.guard';
import { UserGuard } from './auth/guards/user.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canLoad: [UserGuard],
    canActivate: [UserGuard]
  },
  {
    path: 'starships',
    loadChildren: () => import('./starships/starships.module').then((m) => m.StarshipsModule),
    canLoad: [GuestGuard],
    canActivate: [GuestGuard]
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
