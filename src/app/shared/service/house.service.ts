import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient ) { }
  endpoint: string ="http://localhost:5000/api/house";

  checkHouse(user:any):Observable<any>
  {
     return this.http.post<any>(this.endpoint, user);
  }

}
