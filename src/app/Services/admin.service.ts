import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightModule } from '../Modules/flight/flight.module';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  http!:HttpClient;
  url:string = "http://localhost:5163/api/Admin/";
  HTTPOptionsForText: Object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    responseType: 'text'
  }
 
  constructor(http : HttpClient) {
    this.http = http;
  }

  GetAllFlight() : Observable<FlightModule[]>{
    return this.http.get<FlightModule[]>(this.url + "GetAllFlight/");
  }

  GetAllFlightsOfAdmin(email:any) : Observable<FlightModule[]>{
    return this.http.get<FlightModule[]>(this.url + "GetAllFlightsOfAdmin/"+email);
  }

  DisableFlight(fid:number):Observable<boolean>{
    return this.http.put<boolean>(this.url + "DisableFlight/" + fid,null);
  }
  AddFlight(f:FlightModule):Observable<boolean>
  {
   return this.http.post<boolean>(this.url+"AddFlight", f); 
  }
}
