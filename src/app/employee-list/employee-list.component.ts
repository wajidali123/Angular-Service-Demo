import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
public employees = [];
  constructor(private _employeeListService:EmployeeListService) { }

  ngOnInit() {
    this._employeeListService.getEmployees()
        .subscribe(data => this.employees = data);
  }

}
