import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../data-service.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
usersList:any
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  
   
  }
displayUsers(){
  this.usersList=this.dataservice.usersDatas 
}
}
