import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient: HttpClient) { }
  urls = 'http://localhost:3000/users';

  getAllUsers(){
    return this.myClient.get(this.urls);
  }
  getUsersById(id){
    return this.myClient.get(this.urls + '/' + id);
  }
  AddNewUsers(users){
    return this.myClient.post(this.urls,users);
  }
  // DeletUserById(id){
  //   this.myClient.splice(this.myClient.indexOf(user), 1);
  // }
  // updateUser(user: User) {
  //   const index = this.myClient.findIndex(u => user.id === u.id);
  //   this.myClient[index] = user;
  // }


}
