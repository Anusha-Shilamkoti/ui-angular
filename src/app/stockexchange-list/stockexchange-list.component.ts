import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import { Observable } from 'rxjs';
import { Stockexchange } from '../stockexchange';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockexchange-list',
  templateUrl: './stockexchange-list.component.html',
  styleUrls: ['./stockexchange-list.component.css']
})
export class StockexchangeListComponent implements OnInit {
 
  constructor(private router:Router, private stockexchangeservice:StockexchangeService) { } 
  stockexchnagelist:Observable<any[]>;

  ngOnInit(){
    this.stockexchangeservice.getAllstockexchange().subscribe(data=>{
      this.stockexchnagelist=data;
     })
  }
  deleteStockexchange(stockexchange:Stockexchange)

  { 
 
   this.stockexchangeservice.delete(stockexchange.id).subscribe(data=>{
 
   this.stockexchangeservice.getAllstockexchange().subscribe(data=>{this.stockexchnagelist=data;});
 
  }); 
  }
  updateStockexchange(sector : Stockexchange ) {
    window.localStorage.removeItem("edit-id");
  
    window.localStorage.setItem("edit-id", sector.id.toString());
  
    this.router.navigate(['create-stockexchange']);
  
   } 

}
