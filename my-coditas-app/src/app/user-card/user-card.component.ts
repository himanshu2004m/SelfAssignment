import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {GitUsers} from '../user-model';
import {SearchUserService} from '../services/search-user.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user:GitUsers;
  
  show = false;
  reposArray: any;
  constructor(private serviceCall: SearchUserService) { 


  }

  ngOnInit() {
  }

  detailsClicked(){
    this.show = !this.show;
    this.serviceCall.getRepos(this.user.login).subscribe(repos => {
      // set items to json response

     this.reposArray = repos;
     console.log(this.reposArray[0].name);
    });


  }

}
