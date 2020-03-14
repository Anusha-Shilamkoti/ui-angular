import { Component, OnInit } from '@angular/core';
import { IpoService } from '../ipo.service';
import { Observable } from 'rxjs';
import { Ipo } from '../ipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipo-list', 
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IpoListComponent implements OnInit {
  

  constructor(private router:Router, private iposervice:IpoService) { }
  ipolist:Observable<any[]>;

  ngOnInit(){
    this.iposervice.getAllipo().subscribe(data=>{
     this.ipolist=data;
    })
  
  }
  deleteIpo(ipo:Ipo)

 {

  this.iposervice.delete(ipo.id).subscribe(data=>{

  this.iposervice.getAllipo().subscribe(data=>{this.ipolist=data;});

 });
 }
 updateIpo(ipo : Ipo ) {
  window.localStorage.removeItem("edit-id");

  window.localStorage.setItem("edit-id", ipo.id.toString());

  this.router.navigate(['create-ipo']);

 } 

}
