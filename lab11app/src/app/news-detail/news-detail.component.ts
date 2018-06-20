import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
	news: any;
	id: number;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
  	this.getNews();
  }

  	getNews(): void {
  		const id = +this.route.snapshot.paramMap.get('id');
  		this.userService.getNewsDetail(id).subscribe(news => this.news = news);
  	}
}
