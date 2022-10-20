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

const appRoutes: Routes =[
  { path: '', component: HomepageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'profile', component: ProfileComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
