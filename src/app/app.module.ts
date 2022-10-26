import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRouteComponent } from './Components/add-route/add-route.component';
import { DeleteRouteComponent } from './Components/delete-route/delete-route.component';
import { ShowAllRouteComponent } from './Components/show-all-route/show-all-route.component';
import { ShowAllBookingsComponent } from './Components/show-all-bookings/show-all-bookings.component';
import { ApplicationOwnerMenuComponent } from './Components/application-owner-menu/application-owner-menu.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeMenuComponent } from './Components/home-menu/home-menu.component';
import { ShowAllFlightsComponent } from './Components/show-all-flights/show-all-flights.component';
import { ShowFlightsOfAdminComponent } from './Components/show-flights-of-admin/show-flights-of-admin.component';
import { AdminMenuComponent } from './Components/admin-menu/admin-menu.component';
import { DisableFlightComponent } from './Components/disable-flight/disable-flight.component';
import { AddFlightComponent } from './Components/add-flight/add-flight.component';
import { AddBookingComponent } from './Components/add-booking/add-booking.component';
import { ShowCustomerBookingsComponent } from './Components/show-customer-bookings/show-customer-bookings.component';
import { ShowFlightsByStatusComponent } from './Components/show-flights-by-status/show-flights-by-status.component';
import { ShowLatestBookingComponent } from './Components/show-latest-booking/show-latest-booking.component';
import { ShowFilghtsByFromAndToComponent } from './Components/show-filghts-by-from-and-to/show-filghts-by-from-and-to.component';
import { SeatsComponent } from './Components/seats/seats.component';
import { CustomerMenuComponent } from './Components/customer-menu/customer-menu.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRouteComponent,
    DeleteRouteComponent,
    ShowAllRouteComponent,
    ShowAllBookingsComponent,
    ApplicationOwnerMenuComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HomeMenuComponent,
    ShowAllFlightsComponent,
    ShowFlightsOfAdminComponent,
    AdminMenuComponent,
    DisableFlightComponent,
    AddFlightComponent,
    AddBookingComponent,
    ShowCustomerBookingsComponent,
    ShowFlightsByStatusComponent,
    ShowLatestBookingComponent,
    ShowFilghtsByFromAndToComponent,
    SeatsComponent,
    CustomerMenuComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
