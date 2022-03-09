import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  newEmployee: Employee = {
    empId: 0,
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    empContact: "",
    empAddress: "",
    empImageUrl: ""
  }

  constructor(private activatedRoute: ActivatedRoute, 
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
        // to take out the route parameter, we need to inject ActivatedRoute in the constructor
        let empId: any = this.activatedRoute.snapshot.paramMap.get("myId");
        console.log(empId);
        // fetch the employee with the empId from the service layer
        this.newEmployee = this.employeeService.fetchAEmployee(empId);
  }

  test(myEmail: any){
    console.log(myEmail);
  }
  
  updateEmployee(){
    this.employeeService.updateEmployee(this.newEmployee);
    // once update is over navigate back to ListEmployeeComponent
    this.router.navigate(['employee-crud']);
  }
}
