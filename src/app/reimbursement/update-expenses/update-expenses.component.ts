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
    // rmbId: 11,
    //   rmbType: "",
    //   status: "",
    //   amount: 0,
    //   date: "",
    //   empId: 0,
    //   mngId: 0,
    //   action: "pending"
    reimbursementId: 2,
    requestingEmployeeId: 1,
    reimbursementAmount: 300,
    requestApproved: true,
    dateOfRequest: "",
    dateResolved: ""
      
  }

  constructor(private activatedRoute: ActivatedRoute, 
    private reimbursementService: ReimbursementService,
    private router: Router) { }

  ngOnInit(): void {
        // to take out the route parameter, we need to inject ActivatedRoute in the constructor
        let reimbursementId: any = this.activatedRoute.snapshot.paramMap.get("myId");
        console.log(reimbursementId);
        // fetch the reimbursement with the reimbursementId from the service layer
        this.newExpense = this.reimbursementService.fetchAExpense(reimbursementId);
  }

  // test(myType: any){
  //   console.log(myType);
  // }
  
  updateExpense(){
    this.reimbursementService.updateExpense(this.newExpense);
    // once update is over navigate back to ListEmployeeComponent
    this.router.navigate(['reimbursment-crud']);
  }

}
