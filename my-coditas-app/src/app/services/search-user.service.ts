import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class SearchUserService {

  gitUrl: String = 'https://api.github.com';

  constructor(private http: HttpClient) { }

    getUsers(inputName: String) {

      // this.http.get(this.gitUrl + '/search/users?q=' + inputName);

      return this.http.get('https://api.github.com/search/users?q=' + inputName);
    }

    getRepos(inputUserName: String){
      return this.http.get('https://api.github.com/users/' + inputUserName + '/repos');
    }
}
