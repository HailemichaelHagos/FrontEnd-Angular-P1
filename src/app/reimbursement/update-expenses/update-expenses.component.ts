import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementService } from '../reimbursement.service';

@Component({
  selector: 'app-update-expenses',
  templateUrl: './update-expenses.component.html',
  styleUrls: ['./update-expenses.component.css']
})
export class UpdateExpensesComponent implements OnInit {

  newExpense: Reimbursement = {
    rmbId: 11,
      rmbType: "",
      status: "",
      amount: 0,
      date: "",
      empId: 0,
      mngId: 0,
      action: "pending"
  }

  constructor(private activatedRoute: ActivatedRoute, 
    private reimbursementService: ReimbursementService,
    private router: Router) { }

  ngOnInit(): void {
        // to take out the route parameter, we need to inject ActivatedRoute in the constructor
        let rmbId: any = this.activatedRoute.snapshot.paramMap.get("myId");
        console.log(rmbId);
        // fetch the reimbursement with the empId from the service layer
        this.newExpense = this.reimbursementService.fetchAExpense(rmbId);
  }

  test(myType: any){
    console.log(myType);
  }
  
  updateExpense(){
    this.reimbursementService.updateExpense(this.newExpense);
    // once update is over navigate back to ListEmployeeComponent
    this.router.navigate(['reimbursment-crud']);
  }

}
