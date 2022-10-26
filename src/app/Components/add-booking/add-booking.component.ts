import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingModule } from 'src/app/Modules/booking/booking.module';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  svc!:CustomerService;
  data:BookingModule[] = [];
  newbookingform!:FormGroup;
  router!:Router;
  fid!:any;
  email!:any;
  
  constructor(svc:CustomerService, router:Router ) { this.svc = svc; this.router = router;}

  ngOnInit(): void {
    this.newbookingform = new FormGroup({
      fid : new FormControl(null),
      cname : new FormControl(null,Validators.required),
      nofseats : new FormControl(null,Validators.required),
      email : new FormControl(null)
    })
    this.email = localStorage.getItem("EM")?.toString();
    this.fid = Number(localStorage.getItem("FID"));
    this.newbookingform.controls['fid'].setValue(this.fid);
    this.newbookingform.controls['email'].setValue(this.email);

  }
  AddBooking():void{
    let bm=new BookingModule();
    bm.flightId=this.newbookingform.value.fid;
    bm.customerName=this.newbookingform.value.cname;
    bm.bookedSeats=this.newbookingform.value.nofseats;
    bm.emailId=this.email;
    this.svc.AddBooking(bm).subscribe(r=>{
      if(r==true)
        {
          alert("Flight Booked Succesfully!");
          this.router.navigate(["PaymentPage"]);
        }
        else {
          alert("Cannot Complete Booking")
        }
    })
  }  

}
