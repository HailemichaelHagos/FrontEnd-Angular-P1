import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee.model';
import { EmployeeService } from 'src/app/employee/employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {


  
  allEmployees: Employee[] = [];
  toggleAdd: boolean = false;

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
  //commenting this line because we can use private in front of the parameter
  //bookService: BookService;

  // Dependency Injection (DI)
  constructor(private employeeService: EmployeeService, private router: Router) {
    //commenting this line because we can use private in front of the parameter
    //this.bookService = bookService;

    // commented out because we pass bookService as a parameter to the constructor(DI)
    //this.bookService = new BookService();
   }

  // not used anywhere, just to show how an object literal is created
  oneEmployee: Employee = {
    empId: 101,
    email: "samia@gmail",
    password:"sm22",
    firstname: "samia",
    lastname: "johan",
    empContact: "samia@gmail",
    empAddress: "NewYork",
    empImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
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

  toggleApproveRequestForm(){

  }

  toggleDenyRequestForm(){

  }
  toggleViewPendingForm(){

  }
  toggleViewResolvedForm(){

  }
  toggleViewSpecificForm(){

  }
  toggleViewEmployees(){

  }


  goToEditEmployee(empId: number){
    // here we have to route to UpdateEmployeeComponent whose route path is employee-update
    // to use this.router.navigate(), inject Router in the constructor
    this.router.navigate(['employee-update', empId]);
  }

  deleteEmployee(empId: number){
   this.allEmployees = this.employeeService.deleteEmployee(empId);
  }

  addEmployee(){
    // doing this because am working with arrays, otherwise not required
    let addNewEmployee: Employee = {

      empId: 0,
      password: this.newEmployee.password,
      email: this.newEmployee.email,
      firstname: this.newEmployee.firstname,
      lastname: this.newEmployee.lastname,
      empContact: this.newEmployee.empContact,
      empAddress: this.newEmployee.empAddress,
      empImageUrl: this.newEmployee.empImageUrl
    }

    this.employeeService.addEmployee(addNewEmployee);
    this.allEmployees = this.employeeService.fetchAllEmployees();
  }

}
