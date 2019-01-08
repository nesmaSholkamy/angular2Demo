import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AllTripsComponent } from 'app/tripsList/all-trips/all-trips.component';
import { TripDetailsComponent } from 'app/tripsList/trip-details/trip-details.component';

const appRoutes: Routes = [
   { path: '', component: AllTripsComponent },
   { path: 'details', component: TripDetailsComponent },
];

@NgModule ({
  exports: [RouterModule],
   imports: [ BrowserModule,
   RouterModule.forRoot(appRoutes)]
})
export class RoutingModuleModule { }
