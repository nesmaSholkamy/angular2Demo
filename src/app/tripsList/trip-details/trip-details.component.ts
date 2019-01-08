import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { TripsService } from 'app/services/trips.service';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  item:any = {};
  id:any;
  data;

  constructor(private activeRoute: ActivatedRoute, private tripsList: TripsService) {
  }

  ngOnInit() {
        this.activeRoute.queryParams
      .subscribe(params => {
        this.id = params['id'];
      });
      this.searchById(this.id);
  }
  searchById(tripId){
    this.tripsList.getData().subscribe(object =>{
      this.data = object;
     this.item = this.data.filter(data =>data.rideId == tripId)[0];
    })}

}
