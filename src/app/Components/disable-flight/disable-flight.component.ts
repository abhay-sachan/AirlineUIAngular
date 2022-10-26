import { Component, OnInit } from '@angular/core';
import { FlightModule } from 'src/app/Modules/flight/flight.module';
import { AdminService } from 'src/app/Services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-disable-flight',
  templateUrl: './disable-flight.component.html',
  styleUrls: ['./disable-flight.component.css']
})
export class DisableFlightComponent implements OnInit {

  svc!:AdminService;
  data:FlightModule[] = [];
  em!:any;
  disableflightform!:FormGroup;
  router!:Router;
 

  constructor(svc:AdminService, router:Router) { this.svc = svc; this.router = router; }

  ngOnInit(): void {
    this.disableflightform = new FormGroup({
      fid : new FormControl(null,Validators.required)
    })
    this.em = localStorage.getItem("EM")?.toString();
    this.svc.GetAllFlightsOfAdmin(this.em).subscribe(r =>{
      this.data=r;
    });
  }

  DisableFlight():void {
    this.svc.DisableFlight(this.disableflightform.value.fid).subscribe(r =>{
      if(r){
        alert("Status of Flight Changed Successfully!");
        window.location.reload();
      }else{
        alert("No Flight Found!");
      }
    })
  }
  }


