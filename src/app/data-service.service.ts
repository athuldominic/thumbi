import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface User {
  name?: string;
  password?: string;
  email?: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
 usersDatas:User[]=[];
  constructor(private http:HttpClient) { }
  getDatas(myForm){
    this.usersDatas.push(myForm);
    // console.log(this.usersDatas)
}

}