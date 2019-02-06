import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = "/assets/data/employee.json";
  constructor(private http: HttpClient) { }


  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
    /*
    return 
    [
      {"id":1 , "name": "Naqash", "surname": "Ahmad", "dept":"SC&SE","degree":"Software Engineering", "age": 24},
      {"id":2 , "name": "Wajid","surname": "Ali", "dept":"SC&SE","degree":"Computer Science", "age": 24},
      {"id":3 , "name": "Aaqil","surname": "Nizamani", "dept":"SC&SE","degree":"Software Engineering", "age": 24},
      {"id":4 , "name": "Ibrahim","surname": "Nizamani", "dept":"SC&SE","degree":"Economics", "age": 24},
      {"id":5 , "name": "Muhammad","Idrees": "Ahmad", "dept":"SC&SE","degree":"Mathematics", "age": 24}
    ];
    */
  }
}
