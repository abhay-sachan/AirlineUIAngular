import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterLoginService } from 'src/app/Services/register-login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  updatepasswordform!:FormGroup;
  svc!:RegisterLoginService;
  router!:Router;
  em!:any;

  constructor(svc:RegisterLoginService,router:Router) { 
    this.svc=svc;
    this.router=router;

  }

  ngOnInit(): void {
    this.updatepasswordform = new FormGroup({
      email:new FormControl(null),
      oldp:new FormControl(null,Validators.required),
      newp:new FormControl(null,Validators.required),
      cnp:new FormControl(null,Validators.required)
    });
    this.em=localStorage.getItem("EM");
    this.updatepasswordform.controls['email'].setValue(this.em);
  }
  
  Change()
  {
    let em=this.updatepasswordform.value.email;
    let oldp=this.updatepasswordform.value.oldp;
    let newp=this.updatepasswordform.value.newp;
    let cnp=this.updatepasswordform.value.cnp;
    if(oldp == newp){
      alert("Old and New Passwords Can't Be Same");
      return;
    }
    else if(newp != cnp){
      alert("Password does not match");
      return;
    }
    else{
      this.svc.UpdatePassword(em,oldp,newp).subscribe(r => {
        alert("Password Update Successfully!!!");
        this.router.navigate(['Login']);
     });
  }
  }

}
