import { Component } from "@angular/core";
export interface AccountRole {
    name: string
}
@Component({
    selector: 'account-profile',
    templateUrl: './account-profile.html',
    styleUrls: ['./account-profile.css']
})

export class AccountProfilePage {
    accountroles: AccountRole[] = [
        { name: 'Quản trị viên' },
        { name: 'Nhân viên' },
        { name: 'Khách hàng' }
    ];
}