import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailsComponent} from './Components/user-details/user-details.component';
import {NewUserComponent} from './Components/new-user/new-user.component';
import {UsersComponent} from './Components/users/users.component';
const routes: Routes = [
  {path:'', component: UsersComponent},
  {path:'users', component: UsersComponent},
  {path:'users/:id', component: UserDetailsComponent},
  {path:'newuser', component: NewUserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
