import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';

import { ListHttpEmployeeComponent } from './employee/list-http-employee/list-http-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UpdateHttpEmployeeComponent } from './employee/update-http-employee/update-http-employee.component';
import { ViewEmployeesComponent } from './manager/view-employees/view-employees.component';
import { ViewHttpEmployeesComponent } from './manager/view-http-employees/view-http-employees.component';
import { ShowExpensesComponent } from './reimbursement/show-expenses/show-expenses.component';
import { ShowHttpExpensesComponent } from './reimbursement/show-http-expenses/show-http-expenses.component';
import { UpdateExpensesComponent } from './reimbursement/update-expenses/update-expenses.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  { path: "employee-crud", component: ListEmployeeComponent, canActivate: [AuthGuard] },
  { path: "employee-http-crud", component: ListHttpEmployeeComponent, canActivate: [AuthGuard] },
  { path: "employee-update/:myId", component: UpdateEmployeeComponent, canActivate: [AuthGuard] },
  { path: "employee-http-update/:myId", component: UpdateHttpEmployeeComponent, canActivate: [AuthGuard] },
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent},

  { path: "view-employees", component: ViewEmployeesComponent, canActivate: [AuthGuard] },
  { path: "view-http-employees", component: ViewHttpEmployeesComponent, canActivate: [AuthGuard] },
  
  {path: "show-reimb-expense", component: ShowExpensesComponent, canActivate: [AuthGuard]},
  {path: "show-http-reimb-expense", component: ShowHttpExpensesComponent, canActivate: [AuthGuard]},

  {path: "reimbursment-crud", component: ShowExpensesComponent, canActivate: [AuthGuard]},
  {path: "expense-update/:myId", component: UpdateExpensesComponent, canActivate: [AuthGuard]}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
