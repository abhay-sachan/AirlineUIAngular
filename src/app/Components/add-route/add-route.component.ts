import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesModule } from 'src/app/Modules/routes/routes.module';
import { AppOwnerService } from 'src/app/Services/app-owner.service';
@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {

  addrouteform!:FormGroup;
  svc!:AppOwnerService;
  router!:Router;
 
  constructor(svc:AppOwnerService,router:Router) {
    this.svc = svc;
    this.router = router;
   }

  ngOnInit(): void {
    this.addrouteform = new FormGroup({
      route: new FormControl(null,Validators.required)
    })
  }
  AddRoutes():void
  {
      let r = new RoutesModule();
      r.fromCity = this.addrouteform.value.route;
      r.flight = [];

      this.svc.AddRoute(r).subscribe(check =>
        {
          if(check){
            alert("Route Added Successfully");

          }
          else{
            alert("Cannot Add Route")
          }

        })
  }

}
