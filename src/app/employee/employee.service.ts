import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  allEmployees: Employee[] = [

    {
      // employeeId: number,
      // //email: string,
      // employeePassword: string,
      // employeeFirstName: string,
      // employeeLastName: string,
      // employeeContact: string,
      // employeeAddress: String,
      // employeeImageUrl: string


      employeeId: 101,
     // email: "samia@gmail",
     employeePassword:"sm22",
     employeeFirstName: "samia",
     employeeLastName: "johan",
     employeeContact: "samia@gmail",
     employeeAddress: "NewYork",
      employeeImageUrl: "https://www.creativefaze.com/sites/default/files/android-app-developer-Specialist111.jpg"
    },
    {
     
      employeeId: 101,
     // email: "samia@gmail",
     employeePassword:"sm22",
     employeeFirstName: "samia",
     employeeLastName: "johan",
     employeeContact: "samia@gmail",
     employeeAddress: "NewYork",
      employeeImageUrl: "https://www.creativefaze.com/sites/default/files/android-app-developer-Specialist111.jpg"
    },
    {
      
      employeeId: 101,
     // email: "samia@gmail",
     employeePassword:"sm22",
     employeeFirstName: "samia",
     employeeLastName: "johan",
     employeeContact: "samia@gmail",
     employeeAddress: "NewYork",
      employeeImageUrl: "https://www.creativefaze.com/sites/default/files/android-app-developer-Specialist111.jpg"
    }
  ];
  
  constructor() { }

  fetchAllEmployees(): Employee[]{
    return this.allEmployees;
  }

  deleteEmployee(employeeId: number): Employee[]{
    console.log(employeeId);
    for(let i=0; i<this.allEmployees.length;i++){
      if(this.allEmployees[i].employeeId == employeeId){
        this.allEmployees.splice(i, 1);
        break;
      }
    }
    return this.allEmployees;
  }

  addEmployee(employeeModel: Employee): Employee{
    let newEmpId: number = this.allEmployees[this.allEmployees.length-1].employeeId + 1;
    employeeModel.employeeId = newEmpId;
    this.allEmployees.push(employeeModel);
    return employeeModel;
  }

  updateEmployee(employeeModel: Employee): Employee{
    for(let i=0; i<this.allEmployees.length;i++){
      if(this.allEmployees[i].employeeId == employeeModel.employeeId){
        this.allEmployees[i] = employeeModel;
        break;
      }
    }
    return employeeModel;
  }

  fetchAEmployee(empId: number): Employee{
    for(let i=0; i<this.allEmployees.length;i++){
      if(this.allEmployees[i].employeeId == empId){
        return this.allEmployees[i];
      }
    }
    return {
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


      };
  }

}
