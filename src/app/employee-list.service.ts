import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  private _url:string = "/assets/data/employee.json";
  constructor(private http: HttpClient) { }


  getEmployees(): Observable<IEmployee[]>{
    console.log(this.http.get<IEmployee[]>(this._url));
    return this.http.get<IEmployee[]>(this._url);
  }
}
