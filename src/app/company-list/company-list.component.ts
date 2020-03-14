import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';
import { Company } from '../company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private router:Router, private companyservice:CompanyService) { }

  companylist:Observable<any[]>;

  ngOnInit(){
    this.companyservice.getAllcompanies().subscribe(data=>{
      this.companylist=data;
     })
  }
  deleteCompany(company:Company)

 {

  this.companyservice.delete(company.companyName).subscribe(data=>{

  this.companyservice.getAllcompanies().subscribe(data=>{this.companylist=data;});

 }); 
 }
 updateCompany(company : Company ) {
  window.localStorage.removeItem("edit-companyName");

  window.localStorage.setItem("edit-companyName", company.companyName.toString());

  this.router.navigate(['create-company']);

 }

}
