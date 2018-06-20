import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    users: any = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
   this.getUsers();
  }
    getUsers(): void {
        this.userService.getUsers()
            .subscribe(users => {
            console.log(users.news);
            this.users = users.news;
            });
    }
}
