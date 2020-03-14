import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Observable } from 'rxjs';
import { Sector } from '../sector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {

  constructor(private router:Router, private sectorservice:SectorService) { }
  sectorlist:Observable<any[]>;
 
  ngOnInit(){
    this.sectorservice.getAllsectors().subscribe(data=>{
      this.sectorlist=data;
     }) 
  }
  deleteSector(sector:Sector)

 {

  this.sectorservice.delete(sector.id).subscribe(data=>{

  this.sectorservice.getAllsectors().subscribe(data=>{this.sectorlist=data;});

 }); 
 }
 updateSector(sector : Sector ) {
  window.localStorage.removeItem("edit-id");

  window.localStorage.setItem("edit-id", sector.id.toString());

  this.router.navigate(['create-sector']);

 } 


}
