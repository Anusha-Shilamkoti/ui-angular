import { Component, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';
import { Sector } from '../sector';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sector',
  templateUrl: './create-sector.component.html',
  styleUrls: ['./create-sector.component.css']
})
export class CreateSectorComponent implements OnInit {

  constructor(private router:Router, private sectorservice:SectorService) { }
  sector : Sector=new Sector();  
  submitted = false; 
  message: String = "Create Sector";

  ngOnInit(){
    var sectorid = window.localStorage.getItem("edit-id");

    if (sectorid != null && sectorid != "") {
      this.message = "Update Recored";

      this.sectorservice.find(parseInt(sectorid))

        .subscribe(data => {
          this.sector = data; this.sectorsaveform.setValue(this.sector)

        });

    }
    this.submitted=false;
  } 
  sectorsaveform=new FormGroup({
    id:new FormControl('',[Validators.required, Validators.maxLength(5)]),
    sectorName:new FormControl('',[Validators.required, Validators.minLength(5)]),
    brief:new FormControl('',[Validators.required])
  })
  saveSectors(savesectors){
    this.sector=new Sector();
    this.sector.id=this.sectorsaveform.get('id').value;
    //console.log(this.user.id);
    this.sector.sectorName=this.sectorsaveform.get('sectorName').value; 
    this.sector.brief=this.sectorsaveform.get('brief').value;
    this.submitted=true;
    this.save();
  }
  save(){
    this.sectorservice.saveSectors(this.sector).subscribe(data=>console.log(data), error=>console.log(console.error()));
    this.sector=new Sector();
    window.localStorage.removeItem("edit-id");
    this.router.navigate(['home-page']);
  }
  iposaveForm() {
    this.submitted = false;
    this.sectorsaveform.reset();
  }

}
