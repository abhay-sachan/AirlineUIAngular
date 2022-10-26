import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightModule } from 'src/app/Modules/flight/flight.module';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-show-filghts-by-from-and-to',
  templateUrl: './show-filghts-by-from-and-to.component.html',
  styleUrls: ['./show-filghts-by-from-and-to.component.css']
})
export class ShowFilghtsByFromAndToComponent implements OnInit {

  showflightform!:FormGroup;
  router!:Router;
  svc!:CustomerService;
  data:FlightModule[] = [];
  constructor(svc:CustomerService, router:Router) { this.svc = svc; this.router = router }

  ngOnInit(): void {
    this.showflightform = new FormGroup({
      fcity : new FormControl(null,Validators.required),
      tcity : new FormControl(null,Validators.required),
      fid : new FormControl(null)
    })
  }
  ShowFlight(): void {
    this.svc.ShowFlightsByFromAndTo(this.showflightform.value.fcity, this.showflightform.value.tcity).subscribe(r =>{
      this.data=r;
    });
  }
  BookSeat():void {
    localStorage.setItem("FID",this.showflightform.value.fid);
    this.router.navigate(['Seats']);
  }
}
