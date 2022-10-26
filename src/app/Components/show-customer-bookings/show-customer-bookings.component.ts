import { Component, OnInit } from '@angular/core';
import { BookingModule } from 'src/app/Modules/booking/booking.module';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-show-customer-bookings',
  templateUrl: './show-customer-bookings.component.html',
  styleUrls: ['./show-customer-bookings.component.css']
})
export class ShowCustomerBookingsComponent implements OnInit {

  em!:any;
  svc!:CustomerService;
  data:BookingModule[] = [];
  constructor(svc:CustomerService) { this.svc = svc; }

  ngOnInit(): void {
    this.em = localStorage.getItem("EM");
    this.svc.ShowCustomerBookings(this.em).subscribe(r =>{
      this.data=r;
    });
  }

}
