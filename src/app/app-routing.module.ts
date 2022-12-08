import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
// import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import { FeedComponent } from './feed/feed.component';

const appRoutes: Routes = [
  { path:'', redirectTo: '/homepage', pathMatch: 'full' },
  { path:'sign-up', component: SignUpComponent }
  // { path:'feed', component: FeedComponent },
  // { path:'profile', component: ProfileComponent },
  ,{ path:'login', component: LoginComponent }
  ,{
    path: 'homepage',
    component: HomepageComponent,
  },

//     children: [
//       {path: '', component: SignUpComponent },
//       {path: 'new', component: },
//       {
//       path: 'id',
//       component:,
//       resolve: []
//     },
//     {
//       path: ':id/edit',
//       component:,
//       resolve:[]
//     }
//     ]},
//   { path: 'profile', component: ProfileComponent },
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
