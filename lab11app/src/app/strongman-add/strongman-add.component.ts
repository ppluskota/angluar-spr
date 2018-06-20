import { Component, OnInit } from '@angular/core';
import { Strongman } from '../strongman';
import { UserService } from '../user.service';

@Component({
  selector: 'app-strongman-add',
  templateUrl: './strongman-add.component.html',
  styleUrls: ['./strongman-add.component.css']
})
export class StrongmanAddComponent implements OnInit {

	firstName: string = "John";
	lastName: string = "Kowalsky";
	bestScore: number = 0;
	age: number = 18;
	weight: number = 50;
	year: number = (new Date()).getFullYear();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  add(): void {
  	var strongman: Strongman;
  	var index = this.userService.getStrongmans().length + 2;
  	//console.log(index);
  	strongman = {
  	   id: index, fName: this.firstName, lName: this.lastName, age: this.age, weight: this.weight, liftRecord: this.bestScore, competitions: [
  	   	{name: 'Rookie camp', best_score: this.bestScore, year: this.year}
  	   ]
  	}

  	this.userService.addStrongman(strongman);
  }
}
