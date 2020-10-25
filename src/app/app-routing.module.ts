import { NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';

const routes: Routes = [
  {
    path: '', component: SideMenuComponent, children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full'
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      }
    ]
  },
  {
    path: 'login',
    component: AuthenticationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
