import { Component } from '@angular/core';
import {GitUsers} from './user-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
