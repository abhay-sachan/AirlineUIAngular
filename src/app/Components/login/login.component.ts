import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterLoginService } from 'src/app/Services/register-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup;
  svc!:RegisterLoginService;
  router!:Router;
  constructor(svc:RegisterLoginService , router:Router) 
  {
    this.svc = svc;
    this.router = router;
   }

   ngOnInit(): void {
    this.loginform =  new FormGroup({
      email:new FormControl(null , Validators.required),
      pwd:new FormControl(null , Validators.required),
    })
  }
  Authenticate():void
  {
    alert(this.loginform.value.email + "," + this.loginform.value.pwd); 
    let em = this.loginform.value.email;
    let pwd = this.loginform.value.pwd;
    if(em == "appowner@gmail.com" && pwd == "123"){
      this.router.navigate(["ApplicationOwnerMenu"])
    }
    else {
     this.svc.Login(em, pwd).subscribe(r=>{
      if(r=="Customer")
      {
        localStorage.setItem("EM" , em);
        this.router.navigate(["CustomerMenu"])
      }
        else if(r=="Admin")
        {
          localStorage.setItem("EM" , em);
          this.router.navigate(["AdminMenu"])
        }
        else {
        alert("Invalid Credentials");
        }
    });
  }
}

}
