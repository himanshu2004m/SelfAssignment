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
  data :any;
  users: GitUsers[] = [
    {
    'login': 'Himanshu',
    'avatar_url':'../../assets/user3.jpg',
    'url': 'Himanshu@april.biz',
    'repos_url': '1',
    'repo2' : '2'
    },
    {
    'login': 'Mohit',
    'avatar_url':'../../assets/user1.jpg',
    'url': 'Mohit@april.biz',
    'repos_url': '1',
    'repo2' : '2'
    },
    {

    'login': 'Ankur',
    'avatar_url':'../../assets/user3.jpg',
    'url': 'NA',
    'repos_url': '1',
    'repo2' : '2'
    }

  ];
  singleUser: GitUsers = { login: '', url: '', repos_url: '', repo2: ''};


  constructor(private searchUser: SearchUserService) {

  }

  ngOnInit() {
     this.searchUser.getUsers('himanshu2004m').subscribe((data: Response) => {
         console.log('data', data);
       }, function(error){
         console.log(error);
       });

  }

  onSearch(event:Event,text:String){
console.log(text);
    this.searchUser.getUsers(text).map(res => res).subscribe(users2 => {
      // set items to json response

     this.data = users2;
     this.users= this.data.items;
      console.log(this.data.items);
      //event.stopPropagation();
      // initialize to page 1
      
    });
    return false;

  }
  
}
