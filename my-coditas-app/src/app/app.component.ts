import { Component, OnInit } from '@angular/core';
import { GitUsers } from './user-model';
import { PagerServiceService } from './services/pager-service.service';
import { SearchUserService } from './services/search-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data: any;
  pagedItems: GitUsers[] = [
    {
      'login': 'Himanshu',
      'avatar_url': '../../assets/user3.jpg',
      'url': 'Himanshu@april.biz',
      'repos_url': '1',
      'repo2': '2'
    },
    {
      'login': 'Mohit',
      'avatar_url': '../../assets/user1.jpg',
      'url': 'Mohit@april.biz',
      'repos_url': '1',
      'repo2': '2'
    },
    {

      'login': 'Ankur',
      'avatar_url': '../../assets/user3.jpg',
      'url': 'NA',
      'repos_url': '1',
      'repo2': '2'
    }

  ];
  singleUser: GitUsers = { login: '', url: '', repos_url: '', repo2: '' };

  flag = false;
  // array of all items to be paged
  private allItems: any[];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(private searchUser: SearchUserService, private pagerService: PagerServiceService) { }

  ngOnInit() {
    this.searchUser.getUsers('himanshu2004m').subscribe((data: Response) => {
      console.log('data', data);
    }, function (error) {
      console.log(error);
    });

  }

  onSearch(event: Event, text: String) {
    console.log(text);
    this.searchUser.getUsers(text).subscribe(users2 => {
      // set items to json response

      this.data = users2;
      this.users = this.data.items;
      this.setPage(1);
      console.log(this.data.items.length);
      // event.stopPropagation();
      // initialize to page 1

    });
    return false;

  }

  setPage(page: number) {
    console.log(page);
    if (page < 1 || page > this.pager.totalPages) {
           return;
          }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.data.items.length, page);

    // get current page of items
    this.pagedItems = this.data.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log(this.pagedItems)
  }
}
