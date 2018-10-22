import { Component } from "@angular/core";
import { Account, Role } from "../../../../../interface/interface";
import { AccountCreationPage } from "../account-creation";
import { HttpErrorResponse } from "@angular/common/http";
import { Subscription } from "rxjs";
import { AccountService } from "../account.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountRolePage } from "../account-role/account-role";
export interface AccountRole {
    name: string
}
@Component({
    selector: 'account-profile',
    templateUrl: './account-profile.html',
    styleUrls: ['./account-profile.css'],
    providers: [AccountService]
})

export class AccountProfilePage {
    constructor(/*private accountCreation: AccountCreationPage,*/ private accountService: AccountService, private formBuilder: FormBuilder) { }
    account: Account;
    username = '';
    password = '';
    retype_password = '';
    role: Role;
    invalid: any;
    isExisted: any;
    accountForm = new FormGroup({});
    ngOnInit(){
        this.accountForm = this.formBuilder.group({
            account: this.formBuilder.group({
                username: ['', Validators.required],
                password:['', Validators.required],
                retype_password: ['', Validators.required]
            })
        })
    }
    submitAccount(){
        this.account = this.accountForm.value.account;
    }
    abc(){
    }
    validateAccount() {
        // var username = (document.getElementById('username') as HTMLInputElement).value;
        // if (username == '') {
        //     console.log('Vui long nhap ten nguoi');
        //     this.accountCreation.validateAccount(false);
        // } else {
        //     this.accountService.checkAccount(username).subscribe(
        //         response => {
        //             if ((this.username != '') && (this.password != '') && (this.retype_password != '') && (this.password == this.retype_password)) {
        //                 this.accountCreation.validateAccount(true);
        //                 this.setAccount();
        //                 this.isExisted = true;
        //             }
        //         },
        //         (err: HttpErrorResponse) => {
        //             this.accountCreation.validateAccount(false);
        //             this.isExisted = false;
        //         }
        //     )
        // }
    }
    validateInput() {
        // console.log(this.isExisted);
        // if ((this.username != '') && (this.password != '') && (this.retype_password != '') && (this.password == this.retype_password) && this.isExisted) {
        //     this.accountCreation.validateAccount(true);
        //     this.setAccount();
        // } else {
        //     this.accountCreation.validateAccount(false);
        // }
    }
    setAccount() {

        // this.accountCreation.setAccount(this.account);
    }
}