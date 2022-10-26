import { Component, OnInit } from '@angular/core';
import { RoutesModule } from 'src/app/Modules/routes/routes.module';
import { AppOwnerService } from 'src/app/Services/app-owner.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-route',
  templateUrl: './delete-route.component.html',
  styleUrls: ['./delete-route.component.css']
})
export class DeleteRouteComponent implements OnInit {

  deleterouteform!:FormGroup;
  svc!:AppOwnerService;
  data:RoutesModule[] = [];

  constructor(svc:AppOwnerService) { this.svc = svc; }

  ngOnInit(): void {
    this.svc.ShowAllRoutes().subscribe(r =>{
      this.data=r;
    });
    this.deleterouteform = new FormGroup({
      routedel: new FormControl(null,Validators.required)
    })
  }
  DeleteRoute():void 
  {
    this.svc.DeleteRoute(this.deleterouteform.value.routedel).subscribe(check =>
      {
        if(check){
          alert("Route Deleted Succesfully");

        }
        else{
          alert("Cannot Delete Route")
        }

      })
  }
}
