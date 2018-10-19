import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { RoleService } from "../../../../../services/role.service";
import { AccountProfilePage } from "./account-profile/account-profile";
import { Role, Account, Customer, Employee } from "../../../../interface/interface";
import { Profile } from "selenium-webdriver/firefox";
import { AccountRolePage } from "./account-role/account-role";
import { AccountService } from "./account.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'account-creation',
    templateUrl: './account-creation.html',
    styleUrls: ['./account-creation.css'],
})

export class AccountCreationPage {
    isLinear = false;
    role: Role;
    account: Account;
    username: any;
    password: string;
    listRole: Role[];
    isValidAccount: boolean;
    isValidProfile: boolean;
    cusProfile: Customer;
    emplProfile: Employee;
    constructor(private accountService: AccountService) { }
    ngOnInit() {
    }
    setRole(role: any) {
        this.role = role;
    }
    goAccountProf() {
        console.log(this.role);
    }
    goCusOrAdminProf() {
        this.account.role = this.role;
        console.log(this.account);
    }
    setAccount(account: any) {
        this.account = account;
    }
    validateAccount(isValidAccount: boolean) {
        this.isValidAccount = isValidAccount;
    }

    goConfirmPanel(isValidProfile: boolean) {
        if (this.role.account_role === "Customer") {
            this.cusProfile.account = this.account;
            console.log(this.cusProfile);
            this.accountService.saveUser(this.cusProfile).subscribe(
                resp => {
                    console.log('ok')
                },
                (err: HttpErrorResponse) => {
                    console.log(err.error.message);
                }
            )
        } else {
            this.emplProfile.account = this.account;
            console.log(this.emplProfile);
            this.accountService.saveUser(this.emplProfile).subscribe(
                resp => {
                    console.log(this.emplProfile);
                },
                (err: HttpErrorResponse) => {
                    console.log(err.error.errMessage);
                }
            )
        }
    }
    validateProfile(isValidProfile: boolean) {
        this.isValidProfile = isValidProfile;
    }
    setCusProf(cusProfile: any) {
        this.cusProfile = cusProfile;
    }
    setEmplProf(emplProfile: any) {
        this.emplProfile = emplProfile;
    }

}