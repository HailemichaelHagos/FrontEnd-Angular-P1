import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from '../manager.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  
  allManagers: Manager[] = [];
  toggleAdd: boolean = false;

  newManager: Manager = {
    mngId: 0,
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    mngContact: "",
    mngAddress: "",
    mngImageUrl: ""
  }
  //commenting this line because we can use private in front of the parameter
  //managerService: ManagerService;

  // Dependency Injection (DI)
  constructor(private managerService: ManagerService, private router: Router) {
    //commenting this line because we can use private in front of the parameter
    //this.managerService = managerService;

    // commented out because we pass managerService as a parameter to the constructor(DI)
    //this.managerService = new ManagerService();
   }

  // not used anywhere, just to show how an object literal is created
  oneEmployee: Manager = {
    mngId: 101,
    email: "samia@gmail",
    password:"sm22",
    firstname: "samia",
    lastname: "johan",
    mngContact: "samia@gmail",
    mngAddress: "NewYork",
    mngImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  };

  
  ngOnInit(): void {
    this.allManagers = this.managerService.fetchAllManagers();
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

  goToEditManager(mngId: number){
    // to use this.router.navigate(), inject Router in the constructor
    this.router.navigate(['employee-update', mngId]);
  }

  deleteManager(mngId: number){
   this.allManagers = this.managerService.deleteManager(mngId);
  }

  addManager(){
    // doing this because am working with arrays, otherwise not required
    let addNewManager: Manager = {

      mngId: 0,
      password: this.newManager.password,
      email: this.newManager.email,
      firstname: this.newManager.firstname,
      lastname: this.newManager.lastname,
      mngContact: this.newManager.mngContact,
      mngAddress: this.newManager.mngAddress,
      mngImageUrl: this.newManager.mngImageUrl
    }

    this.managerService.addManager(addNewManager);
    this.allManagers = this.managerService.fetchAllManagers();
  }

}
