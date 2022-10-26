import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FlightModule {
  flightId!: number;
  emailId!: string;
  companyName!: string;
  fromCity!: string;
  toCity!: string;
  availableSeats!: number;
  price!: number;
  status!: boolean;
  pickTime!: string;
  dropTime!: string;
  booking:any = []
 }
