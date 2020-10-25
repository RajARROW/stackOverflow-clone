import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { QuestionCardComponent } from './shared/components/question-card/question-card.component';
import { TagComponent } from './shared/components/tag/tag.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { GlobalHttpInterceptorService } from './shared/services/errorInterpriter.service';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideMenuComponent,
    TopNavComponent,
    AuthenticationComponent,
    QuestionCardComponent,
    TagComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
