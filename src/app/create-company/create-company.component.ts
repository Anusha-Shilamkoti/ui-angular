import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(private router:Router, private companyservice:CompanyService) { }

  
  company : Company=new Company();  
  submitted = false; 
  message: String = "Create Company";

  ngOnInit() {
    var id = window.localStorage.getItem("edit-companyName");

    if (id != null && id != "") {
      this.message = "Update Recored";

      this.companyservice.find(id)

        .subscribe(data => {
          this.company = data; this.companysaveform.setValue(this.company)

        });
 
    }
    this.submitted=false;
  }
  companysaveform=new FormGroup({
   // id:new FormControl('',[Validators.required, Validators.minLength(5)]),
    companyName:new FormControl('',[Validators.required, Validators.minLength(5)]),
    turnOver:new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    ceo:new FormControl('',[Validators.required]),
    boardOfDirectors:new FormControl('',[Validators.required]),
    listedStockExchange:new FormControl('',[Validators.required]),
    sector:new FormControl('',[Validators.required]),
    brief:new FormControl('',[Validators.required]),
    stockCode:new FormControl('',[Validators.required])
  })
   saveCompany(savecompany){ 
    this.company=new Company();
   // this.company.id=this.companysaveform.get('id').value;
    //console.log(this.user.id);
    this.company.companyName=this.companysaveform.get('companyName').value; 
    this.company.turnOver=this.companysaveform.get('turnOver').value;
    this.company.ceo=this.companysaveform.get('ceo').value;
    this.company.boardOfDirectors=this.companysaveform.get('boardOfDirectors').value;
   // console.log(this.user.contact);
    this.company.listedStockExchange=this.companysaveform.get('listedStockExchange').value;
    this.company.sector=this.companysaveform.get('sector').value;
    this.company.brief=this.companysaveform.get('brief').value;
    this.company.stockCode=this.companysaveform.get('stockCode').value;
    //console.log(this.user.confirmed);
    this.submitted=true;
    this.save();
  }
  save(){
    this.companyservice.savecompany(this.company).subscribe(data=>console.log(data), error=>console.log(console.error()));
    this.company=new Company();
    window.localStorage.removeItem("edit-companyName");
    this.router.navigate(['company-list']);
  }
  companysaveForm() {
    this.submitted = false;
    this.companysaveform.reset();
  }

}
