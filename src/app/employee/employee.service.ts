import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  allEmployees: Employee[] = [
    {
      empId: 101,
      email: "samia@gmail",
      password:"sm22",
      firstname: "samia",
      lastname: "johan",
      empContact: "samia@gmail",
      empAddress: "NewYork",
      empImageUrl: "https://www.creativefaze.com/sites/default/files/android-app-developer-Specialist111.jpg"
    },
    {
      empId: 102,
      password: "hh22",
      email: "michael@gmail",
      firstname: "michael",
      lastname: "hagos",
      empContact: "michael@gmail",
      empAddress: "Minnesota",
      empImageUrl: "https://www.creativefaze.com/sites/default/files/android-app-developer-Specialist111.jpg"
    },
    {
      empId: 103,
      password: "j022",
      email: "jon@gmail",
      firstname: "jon",
      lastname: "daven",
      empContact: "jon@gmail",
      empAddress: "California",
      empImageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1lcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
    }
  ];
  
  constructor() { }

  fetchAllEmployees(): Employee[]{
    return this.allEmployees;
  }

  deleteEmployee(empId: number): Employee[]{
    console.log(empId);
    for(let i=0; i<this.allEmployees.length;i++){
      if(this.allEmployees[i].empId == empId){
        this.allEmployees.splice(i, 1);
        break;
      }
    }
    return this.allEmployees;
  }

  addEmployee(employeeModel: Employee): Employee{
    let newEmpId: number = this.allEmployees[this.allEmployees.length-1].empId + 1;
    employeeModel.empId = newEmpId;
    this.allEmployees.push(employeeModel);
    return employeeModel;
  }

  updateEmployee(employeeModel: Employee): Employee{
    for(let i=0; i<this.allEmployees.length;i++){
      if(this.allEmployees[i].empId == employeeModel.empId){
        this.allEmployees[i] = employeeModel;
        break;
      }
    }
    return employeeModel;
  }

  fetchAEmployee(empId: number): Employee{
    for(let i=0; i<this.allEmployees.length;i++){
      if(this.allEmployees[i].empId == empId){
        return this.allEmployees[i];
      }
    }
    return {
      empId: 0,
      password: "",
      email: "",
      firstname: "",
      lastname: "",
      empContact: "",
      empAddress: "",
      empImageUrl: ""

      };
  }

}
