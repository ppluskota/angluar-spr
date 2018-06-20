import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';
import { USERS } from '../mock-users';

import { UserService } from '../user.service';
@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  user: User;
  id: number;

  constructor(
      private route: ActivatedRoute,
      private userService: UserService,
  ) { }

  ngOnInit() {
      this.getHero();
  }
    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUser(id)
            .subscribe(user => this.user = user);
    }
}
