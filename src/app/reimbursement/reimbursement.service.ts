import { Injectable } from '@angular/core';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  allExpenses: Reimbursement[] = [
    {
      // rmbId: 111,
      // rmbType: "Ticket",
      // status: "Processed",
      // amount: 200,
      // date: "10:00am",
      // empId: 11,
      // mngId: 12,
      // action: "pending"
      reimbursementId: 1,
      requestingEmployeeId: 1,
      reimbursementAmount: 300,
      requestApproved: true,
      dateOfRequest: "",
      dateResolved: ""
    },
    {
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
    },
    {
      // rmbId: 111,
      // rmbType: "Ticket",
      // status: "Processed",
      // amount: 200,
      // date: "10:00am",
      // empId: 11,
      // mngId: 12,
      // action: "denied"
      reimbursementId: 2,
      requestingEmployeeId: 1,
      reimbursementAmount: 300,
      requestApproved: true,
      dateOfRequest: "",
      dateResolved: ""
    },
    {
      //   rmbId: 111,
      //   rmbType: "Ticket",
      //   status: "Processed",
      //   amount: 200,
      //   date: "10:00am",
      //   empId: 11,
      //   mngId: 12,
      //   action: "pending"
      reimbursementId: 0,
      requestingEmployeeId: 1,
      reimbursementAmount: 300,
      requestApproved: true,
      dateOfRequest: "",
      dateResolved: ""
    }
  ];

  constructor() { }

  fetchAllExpenses(): Reimbursement[] {
    return this.allExpenses;
  }

  deleteExpense(reimbursementId: number): Reimbursement[] {
    console.log(reimbursementId);
    for (let i = 0; i < this.allExpenses.length; i++) {
      if (this.allExpenses[i].requestingEmployeeId == reimbursementId) {
        this.allExpenses.splice(i, 1);
        break;
      }
    }
    return this.allExpenses;
  }

  addExpense(expenseModel: Reimbursement): Reimbursement {
    let newRmbId: number = this.allExpenses[this.allExpenses.length - 1].reimbursementId + 1;
    expenseModel.reimbursementId = newRmbId;
    this.allExpenses.push(expenseModel);
    return expenseModel;
  }

  updateExpense(expenseModel: Reimbursement): Reimbursement {
    for (let i = 0; i < this.allExpenses.length; i++) {
      if (this.allExpenses[i].reimbursementId == expenseModel.reimbursementId) {
        this.allExpenses[i] = expenseModel;
        break;
      }
    }
    return expenseModel;
  }

  fetchAExpense(reimbursementId: number): Reimbursement {
    for (let i = 0; i < this.allExpenses.length; i++) {
      if (this.allExpenses[i].requestingEmployeeId == reimbursementId) {
        return this.allExpenses[i];
      }
    }
    return {
      // rmbId: 0,
      // rmbType: "",
      // status: "",
      // amount: 0,
      // date: "",
      // empId: 0,
      // mngId: 0,
      // action: "pending"
      reimbursementId: 0,
      requestingEmployeeId: 0,
      reimbursementAmount: 0,
      requestApproved: true,
      dateOfRequest: "",
      dateResolved: ""

    };
  }

}
