import { Injectable } from '@angular/core';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  allExpenses: Reimbursement[] = [
    {
      rmbId: 111,
      rmbType: "Ticket",
      status: "Processed",
      amount: 200,
      date: "10:00am",
      empId: 11,
      mngId: 12,
      action: "pending"
    },
    {
      rmbId: 111,
      rmbType: "Ticket",
      status: "Processed",
      amount: 200,
      date: "10:00am",
      empId: 11,
      mngId: 12,

      action: "pending"
    },
    {
      rmbId: 111,
      rmbType: "Ticket",
      status: "Processed",
      amount: 200,
      date: "10:00am",
      empId: 11,
      mngId: 12,
      action: "denied"
    },
    {
      rmbId: 111,
      rmbType: "Ticket",
      status: "Processed",
      amount: 200,
      date: "10:00am",
      empId: 11,
      mngId: 12,
      action: "pending"
    }
  ];
  
  constructor() { }

  fetchAllExpenses(): Reimbursement[]{
    return this.allExpenses;
  }

  deleteExpense(rmbId: number): Reimbursement[]{
    console.log(rmbId);
    for(let i=0; i<this.allExpenses.length;i++){
      if(this.allExpenses[i].empId == rmbId){
        this.allExpenses.splice(i, 1);
        break;
      }
    }
    return this.allExpenses;
  }

  addExpense(expenseModel: Reimbursement): Reimbursement{
    let newRmbId: number = this.allExpenses[this.allExpenses.length-1].empId + 1;
    expenseModel.rmbId = newRmbId;
    this.allExpenses.push(expenseModel);
    return expenseModel;
  }

  updateExpense(expenseModel: Reimbursement): Reimbursement{
    for(let i=0; i<this.allExpenses.length;i++){
      if(this.allExpenses[i].rmbId == expenseModel.rmbId){
        this.allExpenses[i] = expenseModel;
        break;
      }
    }
    return expenseModel;
  }

  fetchAExpense(rmbId: number): Reimbursement{
    for(let i=0; i<this.allExpenses.length;i++){
      if(this.allExpenses[i].rmbId == rmbId){
        return this.allExpenses[i];
      }
    }
    return {
      rmbId: 0,
      rmbType: "",
      status: "",
      amount: 0,
      date: "",
      empId: 0,
      mngId: 0,
      action: "pending"

      };
  }

}
