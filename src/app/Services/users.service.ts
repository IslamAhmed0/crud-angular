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
  // deleteUser(id) {
  //   return this.myClient.delete(this.urls + "/" + id);
  // }




}
