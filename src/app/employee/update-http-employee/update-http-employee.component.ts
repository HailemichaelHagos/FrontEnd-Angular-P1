
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeHttpService } from '../employee-http.service';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-update-http-employee',
  templateUrl: './update-http-employee.component.html',
  styleUrls: ['./update-http-employee.component.css']
})
export class UpdateHttpEmployeeComponent implements OnInit {

  newEmployee: Employee = {
   //   empId: 0,
  //   password: "",
  //  // email: "",
  //   firstname: "",
  //   lastname: "",
  //   empContact: "",
  //   empAddress: "",
  //   empImageUrl: ""
  employeeId: 0,
  //email: string,
  employeePassword: "",
  employeeFirstName: "",
 employeeLastName: "",
  employeeContact: "",
  employeeAddress: "",
  employeeImageUrl: ""
  }

  constructor(private activatedRoute: ActivatedRoute, 
    private employeeHttpService: EmployeeHttpService,
    private router: Router) { }

  ngOnInit(): void {
       // to take out the route parameter, we need to inject ActivatedRoute in the constructor
       let employeeId: any = this.activatedRoute.snapshot.paramMap.get("myId");
       console.log(employeeId);
       // fetch the employee with the empId from the service layer
      this.employeeHttpService.fetchAEmployee(employeeId).subscribe((response)=>{
       this.newEmployee = response;
      });
  }
  
  // test(myEmail: any){
  //   console.log(myEmail);
  // }
  
  updateEmployee(){
    this.employeeHttpService.updateEmployee(this.newEmployee).subscribe((response)=>{
      console.log(response);
      // once update is over navigate back to ListHttpBookComponent
      this.router.navigate(['employee-http-crud']);
    });
  }

}
