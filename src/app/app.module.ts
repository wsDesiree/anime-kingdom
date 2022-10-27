import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { Routes,RouterModule } from '@angular/router';
import { UserComponent } from './profile/user/user.component';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes =[
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'header', component: HeaderComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'feed', component: FeedComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    HeaderComponent,
    UserComponent,
    FeedComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
