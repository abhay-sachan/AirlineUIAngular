import { Component, OnInit } from '@angular/core';
import { FlightModule } from 'src/app/Modules/flight/flight.module';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-show-flights-by-status',
  templateUrl: './show-flights-by-status.component.html',
  styleUrls: ['./show-flights-by-status.component.css']
})
export class ShowFlightsByStatusComponent implements OnInit {

  svc!:CustomerService;
  data:FlightModule[] = [];
  constructor(svc:CustomerService) { this.svc = svc; }

  ngOnInit(): void {
    this.svc.ShowFlightsByStatus().subscribe(r =>{
      this.data=r;
    });
  }

}
