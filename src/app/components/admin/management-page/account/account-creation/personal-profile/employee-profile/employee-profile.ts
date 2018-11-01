import { Component } from "@angular/core";
import { AccountCreationPage } from "../../account-creation";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Role, UserProfile, Account } from "../../../../../../interface/interface";
import { AccountCreationService } from "../../account-creation.service";
import { AccountService } from "../../account.service";
import { HttpErrorResponse } from "@angular/common/http";
import { EmployeePage } from "../../../employee/employee";
import { UserService } from "../../../../../../../services/users.service";
import { AccountPage } from "../../../account-page";

@Component({
    selector: 'employee-profile',
    templateUrl: './employee-profile.html',
    styleUrls: ['./employee-profile.css'],
    providers: [EmployeePage, AccountPage]
})

export class EmployeeProfilePage {
    employeeForm = new FormGroup({});
    constructor(private formBuilder: FormBuilder, private accountService: AccountService, private employee: EmployeePage, private acc: AccountPage) { }
    userProfile: UserProfile;
    fullname = '';
    address = '';
    phone = '';
    nationality = '';
    role: Role;
    account:Account;
    genders: string[] = ['Nam', 'Nu'];
    nations = [
        { value: 'Viet Nam' },
        { value: 'USA' },
        { value: 'Singapore' }
    ];

    ngOnInit() {
        console.log(this.role);
        this.employeeForm = this.formBuilder.group({
            employee: this.formBuilder.group({
                name: ['', Validators.required],
                address: ['', Validators.required],
                phoneNumber: ['', Validators.required],
                nationality: ['', Validators.required],
                identification: ['', Validators.required],
                gender: ['', Validators.required]
            })
        })
    }
    submitEmpl() {
        this.userProfile = this.employeeForm.value.employee;
    }
    saveCustomer() {
        this.account = this.employeeForm.value.account;
        this.account.employee = this.employeeForm.value.employee;
        if (this.employeeForm.valid) {
            this.accountService.saveUser(this.account).subscribe(
                response => {
                    this.employee.ngOnInit();
                    this.acc.ngOnInit();
                },
                (err: HttpErrorResponse) => {

                }
            )
        }
    }
}