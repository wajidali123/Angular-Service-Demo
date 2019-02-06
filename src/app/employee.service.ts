import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = "http://localhost:8080/";
  constructor(private http: HttpClient) { }


  getEmployees(): Observable<contact[]>{
    //console.log(this.http.get<contact[]>(this._url));
    return this.http.get<contact[]>(this._url);
    
  }
}
//me idar hi type karta hun 
//thek hai.
//ju employee-details component hai, is mai api call kar ke data get karna ha.//theek 2 mint