import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingModule } from '../Modules/booking/booking.module';
import { RoutesModule } from '../Modules/routes/routes.module';

@Injectable({
  providedIn: 'root'
})
export class AppOwnerService {

  http!:HttpClient;
  url:string = "http://localhost:5163/api/ApplicationOwner/";
  HTTPOptionsForText: Object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    responseType: 'text'
  }
 
  constructor(http : HttpClient) {
    this.http = http;
  }
  
  ShowAllBookings() : Observable<BookingModule[]>{
    return this.http.get<BookingModule[]>(this.url + "ShowAllBookings/");
  }

  ShowAllRoutes() : Observable<RoutesModule[]>{
    return this.http.get<RoutesModule[]>(this.url + "ShowAllRoutes/");
  }
  
  AddRoute(ro:RoutesModule) : Observable<boolean>{
    return this.http.post<boolean>(this.url + "AddRoute/", ro);
  }
  DeleteRoute(city:string) : Observable<boolean>{
    return this.http.delete<boolean>(this.url + "DeleteRoute/"+city);
  }
}
