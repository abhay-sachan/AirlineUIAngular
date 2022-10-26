import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  SelectSeats!: FormGroup;
  router!:Router;
  constructor(router:Router) { 
    this.router=router;

  }

  ngOnInit(): void {
  }
  seat():void{
    this.router.navigate(["BookingPage"]);
  }
}
