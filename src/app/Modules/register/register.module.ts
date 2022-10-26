import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { 
  
        emailId!: string ;
        password!: string;
        userType!: string;
        booking :any =[]
}
