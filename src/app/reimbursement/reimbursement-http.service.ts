import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementHttpService {

  // to work with HttpClient, we should include HttpClientModule in app.module.ts file
  constructor(private http: HttpClient) { }

  fetchAllExpenses(): Observable<Reimbursement[]>{
    // we need to work with HttpClient to consume an endpoint
    return this.http.get<Reimbursement[]>("http://localhost:4040/api/expenses");
  }

  deleteExpense(rmbId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>("http://localhost:4040/api/expense/"+rmbId);
  }

  addExpense(expenseModel: Reimbursement): Observable<Reimbursement>{
    return this.http.post<Reimbursement>("http://localhost:4040/api/expenses", JSON.stringify(expenseModel));
  }

  updateExpense(expenseModel: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>("http://localhost:4040/managers/resolve", JSON.stringify(expenseModel));
  }

  fetchAExpense(rmbId: number): Observable<Reimbursement>{
    return this.http.get<Reimbursement>("http://localhost:4040/api/books/"+rmbId);
  }
}
