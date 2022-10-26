import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModule } from 'src/app/Modules/register/register.module';
import { RegisterLoginService } from 'src/app/Services/register-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newregform!:FormGroup;
  svc!:RegisterLoginService;
  router!:Router;
  constructor(svc:RegisterLoginService,router:Router) {
    this.svc=svc;
    this.router=router;
   }


  ngOnInit(): void {
    this.newregform=new FormGroup({
      email:new FormControl(null,Validators.required),
      pwd:new FormControl(null,Validators.required),
      user:new FormControl(null,Validators.required)
  })
  }
  NewUser():void{
    let rm=new RegisterModule();
    rm.emailId=this.newregform.value.email;
    rm.password=this.newregform.value.pwd;
    rm.userType=this.newregform.value.user;
    rm.booking=[];
    console.log(rm);
    this.svc.NewUser(rm).subscribe(r=>{
      if(r==true)
        {
          alert("New User Registered");
          this.router.navigate(['Login']);
        }
        else {
          alert("Cannot Register A New User")
        }
    })
  
  }



}
