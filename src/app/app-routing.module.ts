import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './Components/add-flight/add-flight.component';
import { AddRouteComponent } from './Components/add-route/add-route.component';
import { AdminMenuComponent } from './Components/admin-menu/admin-menu.component';
import { ApplicationOwnerMenuComponent } from './Components/application-owner-menu/application-owner-menu.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { CustomerMenuComponent } from './Components/customer-menu/customer-menu.component';
import { DeleteRouteComponent } from './Components/delete-route/delete-route.component';
import { DisableFlightComponent } from './Components/disable-flight/disable-flight.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { SeatsComponent } from './Components/seats/seats.component';
import { ShowAllBookingsComponent } from './Components/show-all-bookings/show-all-bookings.component';
import { ShowAllFlightsComponent } from './Components/show-all-flights/show-all-flights.component';
import { ShowAllRouteComponent } from './Components/show-all-route/show-all-route.component';
import { ShowCustomerBookingsComponent } from './Components/show-customer-bookings/show-customer-bookings.component';
import { ShowFlightsByStatusComponent } from './Components/show-flights-by-status/show-flights-by-status.component';
import { ShowFlightsOfAdminComponent } from './Components/show-flights-of-admin/show-flights-of-admin.component';

const routes: Routes = [
  {path:'AddRoute',component:AddRouteComponent},
  {path:'DeleteRoute',component:DeleteRouteComponent},
  {path:'ShowAllBookings',component:ShowAllBookingsComponent},
  {path:'ShowAllRoutes',component:ShowAllRouteComponent},
  {path:'DeleteRoute',component:DeleteRouteComponent},
  {path:'RegistrationPage',component:RegisterComponent},
  {path:'Home',component:HomePageComponent},
  {path:'Login',component:LoginComponent},
  {path:'ApplicationOwnerMenu',component:ApplicationOwnerMenuComponent},
  {path:'ShowAllFlights',component:ShowAllFlightsComponent},
  {path:'ShowAllFlightsOfAdmin',component:ShowFlightsOfAdminComponent},
  {path:'AdminMenu',component:AdminMenuComponent},
  {path:'DisableFlight',component:DisableFlightComponent},
  {path:'AddFlight',component:AddFlightComponent},
  {path:'ShowCustomerBookings',component:ShowCustomerBookingsComponent},
  {path:'CustomerMenu',component:CustomerMenuComponent},
  {path:'ShowFlightsByStatus',component:ShowFlightsByStatusComponent},
  {path:'ChangePassword',component:ChangePasswordComponent},
  {path:'Seats',component:SeatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
