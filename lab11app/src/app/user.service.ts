import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { USERS } from './mock-users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Strongmans } from './strongman-array';

const httpOptions = {
    headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
    )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  strongmans = Strongmans;

    private usersUrl = 'https://tripbucket.com/compapi/1.0/news/0/16/?tbcities';
    //getUsers(): Observable<User[]> {
        // TODO: send the message _after_ fetching the heroes
       // return of(USERS);
   // }

    getUsers (): Observable<any> {
        return this.http.get(this.usersUrl, httpOptions);
    }
    getUser(id: number): Observable<User> {
        return of(USERS.find(user => user.id === id));
    }

    getStrongmans() {

      return this.strongmans;
    } 

    addStrongman(str) {
      this.strongmans.push(str)
    }

    removeStrongman(strongman) {
          this.strongmans = this.strongmans.filter(obj => obj !== strongman);
    }

    getNewsDetail(id: number): Observable<any> {
      let url = 'https://tripbucket.com/compapi/1.0/news_details/' + id + '/';
      return this.http.get(url, httpOptions);
    }

  constructor(private http: HttpClient) { }
}
