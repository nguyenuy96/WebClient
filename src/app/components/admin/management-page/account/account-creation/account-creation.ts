import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RoleService } from "../../../../../services/role.service";
import { AccountProfilePage } from "./account-profile/account-profile";
import { Role, RoleImp } from "../../../../interface/interface";

@Component({
    selector: 'account-creation',
    templateUrl: './account-creation.html',
    styleUrls: ['./account-creation.css'],
    providers: [AccountProfilePage, RoleImp]
})

export class AccountCreationPage {
    role: Role;
    constructor(private accountProfile: AccountProfilePage, private roleImp: RoleImp){}
    setAccountRole(role:any){
        this.roleImp.setAcccountRole("asd");
        console.log(this.role);
    }
    setRoleToAccount(){
         //this.accountProfile.setAccountRole(this.account_role);
    }
}