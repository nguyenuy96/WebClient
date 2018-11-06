import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { RoleService } from "../../../../../services/role.service";
import { AccountProfilePage } from "./account-profile/account-profile";
import { Role, Account, Customer, Employee, UserProfile } from "../../../../interface/interface";
import { Profile } from "selenium-webdriver/firefox";
import { AccountRolePage } from "./account-role/account-role";
import { AccountService } from "./account.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CustomerProfilePage } from "./personal-profile/customer-profile/customer-profile";
import { EmployeeProfilePage } from "./personal-profile/employee-profile/employee-profile";
import { AccountCreationService } from "./account-creation.service";

@Component({
    selector: 'account-creation',
    templateUrl: './account-creation.html',
    styleUrls: ['./account-creation.css'],
})

export class AccountCreationPage {
    @ViewChild(AccountRolePage) accountRolePage: AccountRolePage;
    @ViewChild(AccountProfilePage) accountProfilePage: AccountProfilePage;
    @ViewChild(EmployeeProfilePage) employeeProfilePage: EmployeeProfilePage;
    @ViewChild(CustomerProfilePage) customerProfilePage: CustomerProfilePage;
    role: Role;
    account: Account;
    isValidAccount: boolean;
    userProfile: UserProfile;
    constructor(private accountService: AccountService) { }

    get roleForm() {
        this.role = this.accountRolePage.role;
        return this.accountRolePage ? this.accountRolePage.roleForm : null;
    }
    get accountForm() {
        this.account = this.accountProfilePage.account;
        if (this.account != undefined && this.accountProfilePage.accountForm.valid) {
            this.account.role = this.role;
        }
        return this.accountProfilePage ? this.accountProfilePage.accountForm : null;
    }
    get profileForm() {
        if (this.role != undefined) {
            if (this.role.roleName == 'Customer') {
                if (this.customerProfilePage != undefined) {
                    this.userProfile = this.customerProfilePage.userProfile;
                    this.customerProfilePage.customerForm.value.account = this.account;
                    //this.customerProfilePage.account = this.account;
                }
                return this.customerProfilePage ? this.customerProfilePage.customerForm : null;
            } else {
                if (this.employeeProfilePage != undefined) {
                    this.userProfile = this.employeeProfilePage.userProfile;
                    this.employeeProfilePage.employeeForm.value.account = this.account;
                }
                return this.employeeProfilePage ? this.employeeProfilePage.employeeForm : null;
            }
        }
    }

}