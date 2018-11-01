import { Component } from "@angular/core";
import { Customer, UserProfile, Account } from "../../../../../../interface/interface";
import { AccountCreationPage } from "../../account-creation";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountCreationService } from "../../account-creation.service";
import { AccountService } from "../../account.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CustomerPage } from "../../../customer/customer";
import { UserService } from "../../../../../../users/user.services";

@Component({
    selector: 'customer-profile',
    templateUrl: './customer-profile.html',
    styleUrls: ['./customer-profile.css'],
    providers: [CustomerPage]
})
export class CustomerProfilePage {
    constructor(private formBuilder: FormBuilder, private accountService: AccountService, private customer: CustomerPage) { }
    userProfile: UserProfile;
    address = '';
    fullname = '';
    phone = '';
    customerForm: FormGroup;
    account: Account;
    ngOnInit() {
        this.customerForm = this.formBuilder.group({
            customer: this.formBuilder.group({
                name: ['', Validators.required],
                address: ['', Validators.required],
                phoneNumber: ['', Validators.required]
            })
        })
    }
    submitCus() {
        this.userProfile = this.customerForm.value.customer;
    }
    saveCustomer(){
        this.account = this.customerForm.value.account;
        this.account.customer = this.customerForm.value.customer;
        if(this.customerForm.valid){
            this.accountService.saveUser(this.account).subscribe(
                response => {
                    this.customer.dataSource = undefined;
                    this.customer.ngOnInit();
                },
                (err: HttpErrorResponse) => {

                }
            )
        }
    }
}