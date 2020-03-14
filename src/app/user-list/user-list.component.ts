import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user';
//import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private router:Router, private userservice:UserService) { }

  userlist:Observable<any[]>;

  ngOnInit(){
    this.userservice.getAllusers().subscribe(data=>{
     this.userlist=data;
    })
  }
  deleteUser(user:User)

 { 
alert("delete works");
  this.userservice.delete(user.id).subscribe(data=>{

  this.userservice.getAllusers().subscribe(data=>{this.userlist=data;});

 });
 }
 updateUser(user : User ) {
  window.localStorage.removeItem("edit-id");

  window.localStorage.setItem("edit-id", user.id.toString());

  this.router.navigate(['registration']);

 }
 

 }
