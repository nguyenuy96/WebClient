import { Component } from "@angular/core";
import { Account, Role } from "../../../../../interface/interface";
import { AccountCreationPage } from "../account-creation";
import { HttpErrorResponse } from "@angular/common/http";
import { Subscription } from "rxjs";
import { AccountService } from "../account.service";
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, AbstractControl } from "@angular/forms";
import { AccountRolePage } from "../account-role/account-role";
import { ErrorStateMatcher } from "@angular/material";
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
    isExisted = false;
    constructor(private accountService: AccountService, private formBuilder: FormBuilder) {this.isExisted = false; }
    account: Account;
    role: Role;
    accountForm = new FormGroup({});
    ngOnInit() {
        this.isExisted = false;
        this.accountForm = this.formBuilder.group({
            account: this.formBuilder.group({
                username: ['', Validators.compose([Validators.required, Validators.maxLength(18), Validators.minLength(6)])],
                password: ['', Validators.compose([Validators.required, Validators.maxLength(18), Validators.minLength(6)])],
                retype_password: ['', Validators.required]
            }, { validator: this.MatchPassword})
        },{validator: this.ValidUser})
    }
    CheckAccount(control: AbstractControl){
    }
    MatchPassword(control: AbstractControl) {
        let password = control.get('password').value;
        let confirmPassword = control.get('retype_password').value;
        if (password != confirmPassword) {
            control.get('retype_password').setErrors({ MatchPassword: true })
        } else {
            return null;
        }
    }
    ValidUser(control: FormGroup, valid: boolean){
        if(valid){
            console.log('ok');
            
            control.get('account').get('username').setErrors({ValidUser: true})
        }else{
            console.log('faslse')
            return null;
        }
    }
    submitAccount() {
        this.account = this.accountForm.value.account;
    }
    checkUsername() {
        console.log(this.accountForm.value.account.username);
        this.accountService.checkAccount(this.accountForm.value.account.username).subscribe(
            resp => {
                this.ValidUser(this.accountForm, false);
            },
            (err: HttpErrorResponse) => {
                this.ValidUser(this.accountForm, true);
            }
        )
    }
}