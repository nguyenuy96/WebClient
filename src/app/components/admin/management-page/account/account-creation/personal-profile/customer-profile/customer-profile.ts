import { Component } from "@angular/core";
import { Customer } from "../../../../../../interface/interface";
import { AccountCreationPage } from "../../account-creation";

@Component({
    selector: 'customer-profile',
    templateUrl: './customer-profile.html',
    styleUrls: ['./customer-profile.css'],
})
export class CustomerProfilePage {
    customer: any;
    address = '';
    fullname = '';
    phone = '';
    constructor(private accCreation: AccountCreationPage) { }
    validateCusProf() {
        var address = (document.getElementById('address') as HTMLInputElement).value;
        var fullname = (document.getElementById('fullname') as HTMLInputElement).value;
        var phone = (document.getElementById('phone') as HTMLInputElement).value;
        if ((this.phone != '') && (this.fullname != '') && (this.phone != '')) {
            this.accCreation.validateProfile(true);
            this.customer = { fullname: fullname, address: address, phone: phone }
        } else {
            this.customer = undefined;
            this.accCreation.validateProfile(false);
        }
        this.accCreation.setCusProf(this.customer);
    }

}