import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee.model';
import { Manager } from './manager.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  allManagers: Manager[] = [
    {
      mngId: 101,
      email: "samia@gmail",
      password:"sm22",
      firstname: "samia",
      lastname: "johan",
      mngContact: "samia@gmail",
      mngAddress: "NewYork",
      mngImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      mngId: 102,
      password: "hh22",
      email: "michael@gmail",
      firstname: "michael",
      lastname: "hagos",
      mngContact: "michael@gmail",
      mngAddress: "Minnesota",
      mngImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      mngId: 103,
      password: "j022",
      email: "jon@gmail",
      firstname: "jon",
      lastname: "daven",
      mngContact: "jon@gmail",
      mngAddress: "California",
      mngImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    }
  ];
  
  
  allEmployees: Employee[] = [
    {
      empId: 101,
      email: "samia@gmail",
      password:"sm22",
      firstname: "samia",
      lastname: "johan",
      empContact: "samia@gmail",
      empAddress: "NewYork",
      empImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      empId: 102,
      password: "hh22",
      email: "michael@gmail",
      firstname: "michael",
      lastname: "hagos",
      empContact: "michael@gmail",
      empAddress: "Minnesota",
      empImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      empId: 103,
      password: "j022",
      email: "jon@gmail",
      firstname: "jon",
      lastname: "daven",
      empContact: "jon@gmail",
      empAddress: "California",
      empImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    }
  ];
  

  constructor() { }
  
  fetchAllEmployees(): Employee[]{
    return this.allEmployees;
  }

  fetchAllManagers(): Manager[]{
    return this.allManagers;
  }

  deleteManager(mngId: number): Manager[]{
    console.log(mngId);
    for(let i=0; i<this.allManagers.length;i++){
      if(this.allManagers[i].mngId == mngId){
        this.allManagers.splice(i, 1);
        break;
      }
    }
    return this.allManagers;
  }

  addManager(managerModel: Manager): Manager{
    let newMngId: number = this.allManagers[this.allManagers.length-1].mngId + 1;
    managerModel.mngId = newMngId;
    this.allManagers.push(managerModel);
    return managerModel;
  }

  updateManager(managerModel: Manager): Manager{
    for(let i=0; i<this.allManagers.length;i++){
      if(this.allManagers[i].mngId == managerModel.mngId){
        this.allManagers[i] = managerModel;
        break;
      }
    }
    return managerModel;
  }

  fetchAManager(mngId: number): Manager{
    for(let i=0; i<this.allManagers.length;i++){
      if(this.allManagers[i].mngId == mngId){
        return this.allManagers[i];
      }
    }
    return {
      mngId: 0,
      password: "",
      email: "",
      firstname: "",
      lastname: "",
      mngContact: "",
      mngAddress: "",
      mngImageUrl: ""

      };
  }
}
