import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightModule } from 'src/app/Modules/flight/flight.module';
import { RoutesModule } from 'src/app/Modules/routes/routes.module';
import { AdminService } from 'src/app/Services/admin.service';
import { AppOwnerService } from 'src/app/Services/app-owner.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  svc!:AdminService;
  data:RoutesModule[] = [];
  em!:any;
  newflightform!:FormGroup;
  router!:Router;
  svc1!:AppOwnerService;

  constructor(svc:AdminService, router:Router, svc1:AppOwnerService ) { this.svc = svc; this.router = router; this.svc1 = svc1; }

  ngOnInit(): void {
    this.svc1.ShowAllRoutes().subscribe(r =>{
      this.data=r;
    });
    this.newflightform = new FormGroup({
      email : new FormControl(null,Validators.required),
      cname : new FormControl(null,Validators.required),
      price : new FormControl(null,Validators.required),
      fcity : new FormControl(null,Validators.required),
      tcity : new FormControl(null,Validators.required),
      ptime : new FormControl(null,Validators.required),
      dtime : new FormControl(null,Validators.required),
    })
    this.em = localStorage.getItem("EM");
    this.newflightform.controls['email'].setValue(this.em);
  }
  AddFlight(): void{
    let nf=new FlightModule();
    nf.emailId=this.newflightform.value.email;
    nf.companyName=this.newflightform.value.cname;
    nf.price=this.newflightform.value.price;
    nf.fromCity=this.newflightform.value.fcity;
    nf.toCity=this.newflightform.value.tcity;
    nf.pickTime=this.newflightform.value.ptime;
    nf.dropTime=this.newflightform.value.dtime;
    
    console.log(nf);
    this.svc.AddFlight(nf).subscribe(r=>{
      if(r==true)
        {
          alert("Flight Added Succesfully!");
        }
        else {
          alert("Cannot Add Flight")
        }
    })
  }
}
