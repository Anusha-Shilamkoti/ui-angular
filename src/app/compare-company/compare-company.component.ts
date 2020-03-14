import {
  Component, OnInit, ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/company';
import { Observable } from 'rxjs/internal/Observable';
import { Stockprice } from 'src/app/stockprice';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import * as Highcharts from 'highcharts';
import { CompanyService } from '../company.service';
import { SectorService } from '../sector.service';
import { StockexchangeService } from '../stockexchange.service';
import { Sector } from '../sector';
import { StockpriceService } from '../stockprice.service';
import { HighchartsService } from './highcharts.service';
@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {



    myGroup: FormGroup;
   
   
   
    constructor(private hcs: HighchartsService,private formBuilder: FormBuilder,private router:Router,private companyserviceservice:CompanyService,private sectorsserviceservice: SectorService,private stockpriceservice:StockpriceService){ }
   
   
   
    companyList: Company[];
   
   
   
    companyListAll: Company[];
   
   
   
    sectorsList: Sector[];
   
   
   
    stockpriceList: Observable<Stockprice[]>;
   
   
   
    ngOnInit() {
     this.stockpriceservice.getmultiplelinechart().subscribe(result => {
   
      var formatteddata = [];
   
      for (var key in result) {
   
       var singleObject = {
   
       name: '',
   
       data: []
   
       }
   
       singleObject.name = key.toUpperCase();
   
       for (var i = 0; i < result[key].length; i++) {
   
       singleObject.data.push(parseInt(result[key][i].currentPrice));
   
       }
   
       formatteddata.push(singleObject);
   
     }
   
     this.drawMultipleLineChart(formatteddata);
   
   
   
    });
   
     this.myGroup= this.formBuilder.group({
   
     "choose": new FormControl([ Validators.required ]),
   
     "sectorName": new FormControl([ Validators.required ]),
   
     "companyName": new FormControl([ Validators.required ]),
   
     "fromdate":new FormControl([ Validators.required ]),
   
     "todate":new FormControl([ Validators.required ])
   
     })
   
     this.companyserviceservice.getAllcompanies().subscribe(data => {
   
     this.companyList = data;
   
     this.companyListAll=data;
   
     this.companyList=this.companyList.filter(comp=>comp.sector == 'NSE') ;
   
     })
   
     this.stockpriceservice.getAllstockprice().subscribe(data => {
   
     this.stockpriceList = data;
   
     })
   
     this.sectorsserviceservice.getAllsectors().subscribe(data => {
   
      this.sectorsList = data;
   
      })
   
    }
   
    sectorChange()
   
    {
   
     var sectorValue=this.myGroup.controls['sectorName'].value;
   
     this.companyList=this.companyListAll.filter(comp=>comp.sector == sectorValue) ;
   
    }
   
    drawMultipleLineChart(formatteddata) {
   
     Highcharts.chart('container', {
   
      title: {
   
       text: 'STOCK MARKET'
   
      },
      yAxis: {
   
       title: {
   
       text: 'Stock price'
   
       }
   
      },
   
      legend: {
   
       layout: 'vertical',
   
       align: 'right',
   
       verticalAlign: 'middle'
   
      },
   
      plotOptions: {
   
       series: {
   
       label: {
   
        connectorAllowed: false
   
       },
   
       pointStart: 2000
   
       }
   
      },
   
      series: formatteddata,
   
      responsive: {
   
       rules: [{
   
       condition: {
   
        maxWidth: 500
   
       },
   
       chartOptions: {
   
        legend: {
   
        layout: 'horizontal',
   
        align: 'center',
   
        verticalAlign: 'bottom'
   
        }
   
       }
   
       }]
   
      }
   
      });
   
     }
   
    }


 
