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
    empId: 101,
    email: "samia@gmail",
    password:"sm22",
    firstname: "samia",
    lastname: "johan",
    empContact: "samia@gmail",
    empAddress: "NewYork",
    empImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  };

  // commented because this is shifted to employee.service.ts
  // allBooks: Book[] = [
  //   {
  //     bookId: 101,
  //     bookTitle: "Harry Potter and the Order of Phoenix",
  //     bookAuthor: "J.K.Rowling",
  //     bookGenre: "Fiction",
  //     bookCost: 45,
  //     bookImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  //   },
  //   {
  //     bookId: 102,
  //     bookTitle: "Harry Potter and the Sorceres Stone",
  //     bookAuthor: "J.K.Rowling",
  //     bookGenre: "Fiction",
  //     bookCost: 100,
  //     bookImageUrl: "https://images.unsplash.com/photo-1610466025839-ec6040c347b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  //   },
  //   {
  //     bookId: 103,
  //     bookTitle: "Harry Potter and the Order of Phoenix",
  //     bookAuthor: "J.K.Rowling",
  //     bookGenre: "Fiction",
  //     bookCost: 145,
  //     bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  //   }
  // ];

  
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

  goToEditEmployee(empId: number){
   
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
