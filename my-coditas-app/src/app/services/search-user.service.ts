import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class SearchUserService {

  gitUrl: String = 'https://api.github.com';

  constructor(private http: HttpClient) { }

    getUsers() {

      this.http.get(this.gitUrl + '/search/users');
    }

}
