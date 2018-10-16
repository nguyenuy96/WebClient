import { Component } from "@angular/core";
import { Account } from "../../../../../interface/interface";
export interface AccountRole {
    name: string
}
@Component({
    selector: 'account-profile',
    templateUrl: './account-profile.html',
    styleUrls: ['./account-profile.css']
})

export class AccountProfilePage {
    account_role: any;
    account: Account;
}