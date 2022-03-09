import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UpdateHttpEmployeeComponent } from './employee/update-http-employee/update-http-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { ListHttpEmployeeComponent } from './employee/list-http-employee/list-http-employee.component';
import { FormsModule } from '@angular/forms';
import { ListManagerComponent } from './manager/list-manager/list-manager.component';
import { ViewEmployeesComponent } from './manager/view-employees/view-employees.component';
import { ViewHttpEmployeesComponent } from './manager/view-http-employees/view-http-employees.component';
import { ShowExpensesComponent } from './reimbursement/show-expenses/show-expenses.component';
import { ShowHttpExpensesComponent } from './reimbursement/show-http-expenses/show-http-expenses.component';
import { UpdateExpensesComponent } from './reimbursement/update-expenses/update-expenses.component';
import { UpdateHttpExpensesComponent } from './reimbursement/update-http-expenses/update-http-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    ManagerComponent,
    ReimbursementComponent,
    LoginComponent,
    LogoutComponent,
    UpdateEmployeeComponent,
    UpdateHttpEmployeeComponent,
    ListEmployeeComponent,
    ListHttpEmployeeComponent,
    ListManagerComponent,
    ViewEmployeesComponent,
    ViewHttpEmployeesComponent,
    ShowExpensesComponent,
    ShowHttpExpensesComponent,
    UpdateExpensesComponent,
    UpdateHttpExpensesComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
