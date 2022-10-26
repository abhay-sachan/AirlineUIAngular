import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingModule } from '../Modules/booking/booking.module';
import { FlightModule } from '../Modules/flight/flight.module';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  http!:HttpClient;
  url:string = "http://localhost:5163/api/Customer/";
  HTTPOptionsForText: Object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    responseType: 'text'
  }
 
  constructor(http : HttpClient) {
    this.http = http;
  }
  AddBooking(b:BookingModule) : Observable<boolean>{
    return this.http.post<boolean>(this.url + "AddBooking/", b);
  }
  ShowCustomerBookings(email: string) : Observable<BookingModule[]>{
    return this.http.get<BookingModule[]>(this.url + "ShowCustomerBookings/"+email);
  }
  ShowFlightsByStatus() : Observable<FlightModule[]>{
    return this.http.get<FlightModule[]>(this.url + "ShowFlightsByStatus/");
  }
  ShowLatestBooking() : Observable<BookingModule>{
    return this.http.get<BookingModule>(this.url + "ShowLatestBooking/");
  }
  ShowFlightsByFromAndTo(fcity:string,tcity:string) : Observable<FlightModule[]>{
    return this.http.get<FlightModule[]>(this.url + "ShowFlightsByFromAndTo/"+fcity+"/"+tcity);
  }
}
