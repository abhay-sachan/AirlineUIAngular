import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BookingModule {
  bookingId!: number;
  flightId!: number;
  customerName!: string;
  emailId!: string;
  bookedSeats!: number;
  totalPrice!: number;
  discount!: number;
  discountedPrice!: number;
}
