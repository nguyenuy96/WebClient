import { Component } from "@angular/core";
export interface AccountRole {
    name: string
}
@Component({
    selector: 'account-role',
    templateUrl: './account-role.html',
    styleUrls: ['./account-role.css']
})

export class AccountRolePage {
        accountroles: AccountRole[] = [
            { name: 'Quản trị viên' },
            { name: 'Nhân viên' },
            { name: 'Khách hàng' }
        ];
}