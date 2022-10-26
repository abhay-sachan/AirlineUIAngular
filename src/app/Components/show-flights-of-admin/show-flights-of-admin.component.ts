import { Component, OnInit } from '@angular/core';
import { FlightModule } from 'src/app/Modules/flight/flight.module';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-show-flights-of-admin',
  templateUrl: './show-flights-of-admin.component.html',
  styleUrls: ['./show-flights-of-admin.component.css']
})
export class ShowFlightsOfAdminComponent implements OnInit {

  svc!:AdminService;
  data:FlightModule[] = [];
  em!:any;

  constructor(svc:AdminService) { this.svc = svc; }

  ngOnInit(): void {

    this.em = localStorage.getItem("EM")?.toString();
    this.svc.GetAllFlightsOfAdmin(this.em).subscribe(r =>{
      this.data=r;
    });
  }

}
