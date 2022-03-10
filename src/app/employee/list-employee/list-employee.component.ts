import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  
  allEmployees: Employee[] = [];
  toggleAdd: boolean = false;

  newEmployee: Employee = {
    // empId: 0,
    // password: "",
    // //email: "",
    // firstname: "",
    // lastname: "",
    // empContact: "",
    // empAddress: "",
    // empImageUrl: ""
    employeeId: 0,
    //email: string,
    employeePassword: "",
    employeeFirstName: "",
   employeeLastName: "",
    employeeContact: "",
    employeeAddress: "",
    employeeImageUrl: ""

  }
  //commenting this line because we can use private in front of the parameter
  //employeeService: employeeService;

  // Dependency Injection (DI)
  constructor(private employeeService: EmployeeService, private router: Router) {
    //commenting this line because we can use private in front of the parameter
    //this.employeeService = employeeService;

    // commented out because we pass employeeService as a parameter to the constructor(DI)
    //this.employeeService = new employeeService();
   }

  // not used anywhere, just to show how an object literal is created
  oneEmployee: Employee = {
   
    employeeId: 101,
     // email: "samia@gmail",
     employeePassword:"sm22",
     employeeFirstName: "samia",
     employeeLastName: "johan",
     employeeContact: "samia@gmail",
     employeeAddress: "NewYork",
      employeeImageUrl: "https://www.creativefaze.com/sites/default/files/android-app-developer-Specialist111.jpg"
    
  };


  
  ngOnInit(): void {
    this.allEmployees = this.employeeService.fetchAllEmployees();
  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy() called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges() called");
  }

  toggleAddForm(){
    if(this.toggleAdd){
      this.toggleAdd = false;
    }else{
      this.toggleAdd = true;
    }
  }
 
  submitRequest(){
    this.router.navigate(['submit-new-request']);
   
   }

  viewPendingRequest(){

  }
  viewResolvedRequest(){

  }
  viewInfo(){

  }

  goToEditEmployee(employeeId: number){
   
    this.router.navigate(['employee-update', employeeId]);
  }

  deleteEmployee(employeeId: number){
   this.allEmployees = this.employeeService.deleteEmployee(employeeId);
  }

  addEmployee(){
    // doing this because am working with arrays, otherwise not required
    let addNewEmployee: Employee = {

      employeeId: 0,
      employeePassword: this.newEmployee.employeePassword,
    //  email: this.newEmployee.email,
    employeeFirstName: this.newEmployee.employeeFirstName,
    employeeLastName: this.newEmployee.employeeLastName,
    employeeContact: this.newEmployee.employeeContact,
    employeeAddress: this.newEmployee.employeeAddress,
    employeeImageUrl: this.newEmployee.employeeImageUrl

       // employeeId: number,
      // //email: string,
      // employeePassword: string,
      // employeeFirstName: string,
      // employeeLastName: string,
      // employeeContact: string,
      // employeeAddress: String,
      // employeeImageUrl: string
    }

    this.employeeService.addEmployee(addNewEmployee);
    this.allEmployees = this.employeeService.fetchAllEmployees();
  }
}
