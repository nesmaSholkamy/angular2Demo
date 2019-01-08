import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { TripsService } from 'app/services/trips.service';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.css']
})
export class AllTripsComponent implements OnInit {
  data;
  searchParam;
  constructor(private _router: Router, private tripsList: TripsService) { }

  ngOnInit() {
    this.tripsList.getData().subscribe(data =>{
      this.data = data;
    })
  }
  Go(tripId): void { 
    this._router.navigate(['/details' ],
     { queryParams: { id: tripId } });
 } 

}
