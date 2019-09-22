import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userInp: any[]=[];

  constructor(private dataservice:DataService) { }

  ngOnInit() {
  }
onSubmit(myForm){
  this.dataservice.getDatas(myForm.value);
}
}
