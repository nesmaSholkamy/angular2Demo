import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TripsService {
  private apiUrl = 'https://carpoolingapi.azurewebsites.net/api/values';
  data: any = {};
 
  constructor(private http: Http){
  }
  getData(){
     return this.http.get(this.apiUrl)
     .map((res: Response) => res.json())
  }

}
