import { Component } from "@angular/core";
import { Customer, UserProfile } from "../../../../../../interface/interface";
import { AccountCreationPage } from "../../account-creation";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountCreationService } from "../../account-creation.service";
import { AccountService } from "../../account.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'customer-profile',
    templateUrl: './customer-profile.html',
    styleUrls: ['./customer-profile.css']
})
export class CustomerProfilePage {
    constructor(private formBuilder: FormBuilder, private accountService: AccountService) { }
    userProfile: UserProfile;
    address = '';
    fullname = '';
    phone = '';
    customerForm: FormGroup;
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
        if(this.customerForm.valid){
            this.accountService.saveUser(this.customerForm.value.userProfile).subscribe(
                response => {

                },
                (err: HttpErrorResponse) => {

                }
            )
        }
    }
}