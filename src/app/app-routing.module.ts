import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import {UserLoginComponent} from './user-login/user-login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'', redirectTo:'user-login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'movies', component:MoviesComponent,canActivate:[AuthGuard]},
  {path:'signup', component: SignupComponent},
  {path:'user', component: UserComponent},
  {path:'search', component: SearchComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'forgetpassword', component: ForgetpasswordComponent},
  {path: 'aboutus', component: AboutusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
