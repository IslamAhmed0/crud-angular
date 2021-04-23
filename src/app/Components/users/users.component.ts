import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users;
  constructor(private myService: UsersService) { }

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (res)=>{this.users=res},
      (err)=>{console.log(err)}
    )
  }

}
