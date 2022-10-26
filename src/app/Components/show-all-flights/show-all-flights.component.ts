import { Component, OnInit } from '@angular/core';
import { FlightModule } from 'src/app/Modules/flight/flight.module';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-show-all-flights',
  templateUrl: './show-all-flights.component.html',
  styleUrls: ['./show-all-flights.component.css']
})
export class ShowAllFlightsComponent implements OnInit {

  svc!:AdminService;
  data:FlightModule[] = [];
  constructor(svc:AdminService) { this.svc = svc; }

  ngOnInit(): void {
    this.svc.GetAllFlight().subscribe(r =>{
      this.data=r;
    });
  }

}
