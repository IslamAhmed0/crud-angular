import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../Services/users.service';

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
      email:this.email
    };
    this.myService.AddNewUsers(user).subscribe();

  }

}
