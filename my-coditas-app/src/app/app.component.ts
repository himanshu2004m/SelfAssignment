import { Component, OnInit } from '@angular/core';
import {GitUsers} from './user-model';
import {SearchUserService} from './services/search-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  users: GitUsers[] = [
    {
    'name': 'Himanshu',
    'url': 'Himanshu@april.biz',
    'repo1': '1',
    'repo2' : '2'
    },
    {
    'name': 'Mohit',
    'url': 'Mohit@april.biz',
    'repo1': '1',
    'repo2' : '2'
    },
    {

    'name': 'Ankur',
    'url': 'NA',
    'repo1': '1',
    'repo2' : '2'
    }

  ];
  singleUser: GitUsers = { name: '', url: '', repo1: '', repo2: ''};


  constructor(private searchUser: SearchUserService) {

  }

  ngOnInit() {
    this.searchUser.getUsers('himanshu2004m').subscribe((data: Response) => {
        console.log('data', data);
      }, function(error){
        console.log(error);
      });

  }

  onSearch(text:String){

    this.searchUser.getUsers(text).map(res => res).subscribe(users2 => {
      // set items to json response
      this.users = res.items as GitUsers[];
     // console.log(users2);
      // initialize to page 1
      
    });
  }
  
}
