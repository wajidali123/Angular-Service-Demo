import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService:EmployeeService) {
    
  }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe((data) => {this.employees = data; console.log(data)}, err => {
          console.log(err)
        });
        console.log("Details service method run");
  }

}
// ye log karwaya he?
//nai mai ne tu nai kia tum check karo!
// iska mujhe exact yad nai, asal me I think idar subscribe karne ke baad callback function ya promise use karni hogi wait