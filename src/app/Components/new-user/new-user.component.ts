import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../Services/users.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  id;
  email;
  phone;
  name;
  address;
  constructor(private myService: UsersService) { }

  ngOnInit(): void {
  }
  add(){
    let user={
      id:this.id,
      name:this.name,
      phone:this.phone,
      email:this.email,
      address:this.address
    };
    this.myService.AddNewUsers(user).subscribe();
    // this.route.navigate('/users');

  }

}
