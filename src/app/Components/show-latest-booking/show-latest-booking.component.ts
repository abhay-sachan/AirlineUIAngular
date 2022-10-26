import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingModule } from 'src/app/Modules/booking/booking.module';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-show-latest-booking',
  templateUrl: './show-latest-booking.component.html',
  styleUrls: ['./show-latest-booking.component.css']
})
export class ShowLatestBookingComponent implements OnInit {

  svc!:CustomerService;
  data!:BookingModule;
  router!:Router;
  constructor(svc:CustomerService, router:Router) { this.svc = svc; this.router = router }

  ngOnInit(): void {
    this.svc.ShowLatestBooking().subscribe(r =>{
      this.data=r;
      console.log(r);
    });
  }

}
