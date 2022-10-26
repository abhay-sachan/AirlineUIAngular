import { Component, OnInit } from '@angular/core';
import { RoutesModule } from 'src/app/Modules/routes/routes.module';
import { AppOwnerService } from 'src/app/Services/app-owner.service';

@Component({
  selector: 'app-show-all-route',
  templateUrl: './show-all-route.component.html',
  styleUrls: ['./show-all-route.component.css']
})
export class ShowAllRouteComponent implements OnInit {

  svc!:AppOwnerService;
  data:RoutesModule[] = [];
  constructor(svc:AppOwnerService) { this.svc = svc; }

  ngOnInit(): void {
    this.svc.ShowAllRoutes().subscribe(r =>{
      this.data=r;
    });
  }

}
