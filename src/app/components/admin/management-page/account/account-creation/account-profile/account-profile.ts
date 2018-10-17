import { Component } from "@angular/core";
import { Account, Role } from "../../../../../interface/interface";
import { AccountCreationPage } from "../account-creation";
export interface AccountRole {
    name: string
}
@Component({
    selector: 'account-profile',
    templateUrl: './account-profile.html',
    styleUrls: ['./account-profile.css']
})

export class AccountProfilePage {
    account: any;
    username: any;
    password = '';
    retype_password: string;
    role: Role;
    // checkPassword() {
    //     if (this.password == "")
    //         console.log("type password")
    //     else
    //         if (this.retype_password != "") {
    //             if (this.password != this.retype_password)
    //                 this.accountCreation.setPassword('');
    //             else{


    //             }   
    //         }
    // }

    getUsername() {
        var username = (document.getElementById('username') as HTMLInputElement).value;
        var password = (document.getElementById('password') as HTMLInputElement).value;
        this.account = { username: username, passowrd: password }
        return this.account;
    }
    onChangeUsername(username: string) {
        // this.accountCreation.setUsername(username);
        // this.account = {username: username, password: this.password};
        // console.log(this.account);
        // this.accountCreation.setPassword(this.account);
    }
}