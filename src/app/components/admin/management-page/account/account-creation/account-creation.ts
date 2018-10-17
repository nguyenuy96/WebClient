import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { RoleService } from "../../../../../services/role.service";
import { AccountProfilePage } from "./account-profile/account-profile";
import { Role, Account } from "../../../../interface/interface";
import { Profile } from "selenium-webdriver/firefox";
import { AccountRolePage } from "./account-role/account-role";

@Component({
    selector: 'account-creation',
    templateUrl: './account-creation.html',
    styleUrls: ['./account-creation.css'],
    providers: [AccountProfilePage]
})

export class AccountCreationPage {
    role: Role;
    account: Account;
    profile: Profile;
    username: any;
    password: string;
    listRole: Role[];
    constructor( private roleService: RoleService, private a: AccountProfilePage) { }
    ngOnInit() {
    }
    setRole(role: any) {
        this.role = role;
    }
    nextStep(){
        console.log(this.role);
    }
    getUsername(account:any){
        this.account = account;
        console.log(this.username);
    }
    setUsername() {
        this.account = this.a.getUsername();
        console.log(this.account);
    }
    // setPassword(account: any) {
    //     this.account = account;
    //     console.log(this.account);
    // }
    // setAccount() {
    //     console.log(this.account);
    // }
    // setProfile(profile: any) {
    //     this.profile = profile;
    // }

}