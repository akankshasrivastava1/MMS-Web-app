import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    UserLoginComponent,
    ForgetpasswordComponent,
    AboutusComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
