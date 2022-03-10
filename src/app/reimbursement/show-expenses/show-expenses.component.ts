
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-show-expenses',
  templateUrl: './show-expenses.component.html',
  styleUrls: ['./show-expenses.component.css']
})
export class ShowExpensesComponent implements OnInit {


  allExpenses: Reimbursement[] = [];
  toggleAdd: boolean = false;

  newExpense: Reimbursement = {
    // rmbId: 0,
    // rmbType: "",
    // status: "",
    // amount: 0,
    // date: "",
    // empId: 0,
    // mngId: 0,
    // action: "approved"
    reimbursementId: 3,
    requestingEmployeeId: 0,
    reimbursementAmount: 0,
    requestApproved: true,
    dateOfRequest: "",
    dateResolved: ""

  }
  //commenting this line because we can use private in front of the parameter
  //reimbursementService: ReimbursementService;

  // Dependency Injection (DI)
  constructor(private reimbursementService: ReimbursementService, private router: Router) {
    //commenting this line because we can use private in front of the parameter
    //this.reimbursementService = reimbursementService;

    // commented out because we pass reimbursementService as a parameter to the constructor(DI)
    //this.reimbursementService = new ReimbursementService();
  }

  // not used anywhere, just to show how an object literal is created
  oneExpense: Reimbursement = {
    // rmbId: 111,
    // rmbType: "Ticket",
    // status: "Processed",
    // amount: 200,
    // date: "10:00am",
    // empId: 11,
    // mngId: 12,
    // action: "pending"
    reimbursementId: 2,
    requestingEmployeeId: 1,
    reimbursementAmount: 300,
    requestApproved: true,
    dateOfRequest: "",
    dateResolved: ""

  };



  ngOnInit(): void {
    this.allExpenses = this.reimbursementService.fetchAllExpenses();
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges() called");
  }

  toggleAddForm() {
    if (this.toggleAdd) {
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }

  goToEditExpense(reimbursementId: number) {
    // here we have to route to update Reim.. whose route path is'expense-update' // create other compo
    // to use this.router.navigate(), inject Router in the constructor
    this.router.navigate(['expense-update', reimbursementId]);
  }

  deleteExpense(reimbursementId: number) {
    this.allExpenses = this.reimbursementService.deleteExpense(reimbursementId);
  }

  addExpense() {
    // doing this because am working with arrays, otherwise not required
    let addNewExpense: Reimbursement = {
      // rmbId: 0,
      // rmbType: this.newExpense.rmbType,
      // status: this.newExpense.status,
      // amount: this.newExpense.amount,
      // date: this.newExpense.date,
      // empId: this.newExpense.empId,
      // mngId: this.newExpense.mngId,
      // action: this.newExpense.action,
      //????
      reimbursementId: 0,
      requestingEmployeeId: 0,
      reimbursementAmount: 0,
      requestApproved: true,
      dateOfRequest: "",
      dateResolved: ""

    }

    this.reimbursementService.addExpense(addNewExpense);
    this.allExpenses = this.reimbursementService.fetchAllExpenses();
  }

}
