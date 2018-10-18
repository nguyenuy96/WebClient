import { Component } from "@angular/core";
import { Account, Role } from "../../../../../interface/interface";
import { AccountCreationPage } from "../account-creation";
import { HttpErrorResponse } from "@angular/common/http";
import { Subscription } from "rxjs";
import { AccountService } from "../account.service";
export interface AccountRole {
    name: string
}
@Component({
    selector: 'account-profile',
    templateUrl: './account-profile.html',
    styleUrls: ['./account-profile.css'],
    providers: [AccountProfilePage, AccountService]
})

export class AccountProfilePage {
    constructor(private accountCreation: AccountCreationPage, private accountService: AccountService) { }
    account: any;
    username = '';
    password = '';
    retype_password = '';
    role: Role;
    invalid: any;
    validateAccount() {
        var username = (document.getElementById('username') as HTMLInputElement).value;
        if (username == '') {
            console.log('Vui long nhap ten nguoi');
            this.accountCreation.validateAccount(false);
        } else {
            this.accountService.checkAccount(username).subscribe(
                response => {
                    if ((this.username != '') && (this.password != '') && (this.retype_password != '') && (this.password == this.retype_password)) {
                        this.accountCreation.validateAccount(true);
                        this.setAccount();
                    }
                },
                (err: HttpErrorResponse) => {
                    this.accountCreation.validateAccount(false);
                }
            )
        }
    }
    validateInput() {
        if ((this.username != '') && (this.password != '') && (this.retype_password != '') && (this.password == this.retype_password)) {
            this.accountCreation.validateAccount(true);
            this.setAccount();
        } else {
            this.accountCreation.validateAccount(false);
        }
    }
    setAccount() {
        var username = (document.getElementById('username') as HTMLInputElement).value;
        var password = (document.getElementById('password') as HTMLInputElement).value;
        if (username == "" || password == "")
            this.account = undefined;
        else
            this.account = { username: username, password: password }
        this.accountCreation.setAccount(this.account);
    }
}