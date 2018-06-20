import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

	tripNews: any = []
  constructor(private userService: UserService) { }

  ngOnInit() {
   this.getUsers();
  }
    getUsers(): void {
        this.userService.getUsers()
            .subscribe(users => {
           // console.log(users.news);
            this.tripNews = users.news;
            });
    }

}
