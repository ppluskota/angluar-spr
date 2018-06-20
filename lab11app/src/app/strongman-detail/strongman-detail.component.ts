import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Strongman } from '../strongman';
import { Strongmans } from '../strongman-array';

@Component({
  selector: 'app-strongman-detail',
  templateUrl: './strongman-detail.component.html',
  styleUrls: ['./strongman-detail.component.css']
})
export class StrongmanDetailComponent implements OnInit {
	strongmanArray = Strongmans;
	selectedStrongman: Strongman;
	id: number;
	avarageScore: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getStrongman();
  }

  getStrongman(): void {
  	  	const id = +this.route.snapshot.paramMap.get('id');
  		this.id = id;
  		for (let strongman of this.strongmanArray) {
  			if (strongman.id == id) {
  				this.selectedStrongman = strongman;
  				this.getAvarageScore(strongman);
  			}
  		}
  }

  getAvarageScore(strongman: Strongman): void {
  	var results = 0;
  	for (let item of strongman.competitions) {
  		results += item.best_score;
  	}

  	this.avarageScore = results / strongman.competitions.length;
  }
}
