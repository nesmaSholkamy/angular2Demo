import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AllTripsComponent } from './tripsList/all-trips/all-trips.component';
import { TripDetailsComponent } from './tripsList/trip-details/trip-details.component';
import { RoutingModuleModule } from './routing-module/routing-module.module';
import { TripsService } from './services/trips.service';
import { SearchPipePipe } from './search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllTripsComponent,
    TripDetailsComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModuleModule
  ],
  providers: [
    TripsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
