import { Component, OnInit } from '@angular/core';
import { Strongman } from '../strongman';
import { Strongmans } from '../strongman-array';
import { UserService } from '../user.service';

@Component({
  selector: 'app-strongman',
  templateUrl: './strongman.component.html',
  styleUrls: ['./strongman.component.css']
})
export class StrongmanComponent implements OnInit {

	strongmanArray = []; // = UserService.getStrongmans();
	selectedStrongman: Strongman;
	averageScore = 0;
	bestStrongmanVal = 0;
	isOpen = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  console.log("!!!");
   this.strongmanArray = this.userService.getStrongmans();
  	this.bestStrongman();
  }

  bestStrongman(): void {

  	var res = 0;
  	for (let strongman of this.strongmanArray) {
  	strongman.open = false;
  		if (strongman.liftRecord > res) {
  			res = strongman.liftRecord;
  		}
  	}

  	this.bestStrongmanVal = res;
  }

  remove(strongman): void {
  	this.userService.removeStrongman(strongman);
  	   this.strongmanArray = this.userService.getStrongmans();
  	this.bestStrongman();
  }
}
