import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModule } from '../Modules/register/register.module';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  http!:HttpClient;
  url:string = "http://localhost:5163/api/RegisterLogin/";
  HTTPOptionsForText: Object = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    responseType: 'text'
  }
  constructor(http : HttpClient) {
    this.http = http;
  }

  
  Login(email:string , pwd:string):Observable<string>
  {
   return this.http.get<string>(this.url+"Login/"+email+"/"+pwd+"/" , this.HTTPOptionsForText);
  }

  NewUser(r:RegisterModule):Observable<boolean>
  {
   return this.http.post<boolean>(this.url+"NewRegister", r); 
  }
  UpdatePassword(em:string , oldp:string , newp:string)
  {
   return this.http.put<boolean>(this.url+"UpdatePwd/" +em+"/"+oldp+"/"+newp , null); 
  }

}
