import { Component, OnInit } from '@angular/core';
import { BookingModule } from 'src/app/Modules/booking/booking.module';
import { AppOwnerService } from 'src/app/Services/app-owner.service';

@Component({
  selector: 'app-show-all-bookings',
  templateUrl: './show-all-bookings.component.html',
  styleUrls: ['./show-all-bookings.component.css']
})
export class ShowAllBookingsComponent implements OnInit {

  svc!:AppOwnerService;
  data:BookingModule[] = [];
  constructor(svc:AppOwnerService) { this.svc = svc; }

  ngOnInit(): void {
    this.svc.ShowAllBookings().subscribe(r =>{
      this.data=r;
    });
  }

}
