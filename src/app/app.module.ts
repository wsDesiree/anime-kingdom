import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { Routes,RouterModule } from '@angular/router';
import { UserComponent } from './profile/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptorService } from './auth-interceptor.service';
import { LoggingInterceptorService } from './logging-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { AlertComponent } from './shared/alert/alert.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

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
    SignUpComponent,
    AuthComponent,
    AlertComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
