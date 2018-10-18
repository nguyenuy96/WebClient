import { Component } from "@angular/core";
import { RoleService } from "../../../../../../services/role.service";
import { Role } from "../../../../../interface/interface";
import { AccountProfilePage } from "../account-profile/account-profile";
import { AccountCreationPage } from "../account-creation";
@Component({
    selector: 'account-role',
    templateUrl: './account-role.html',
    styleUrls: ['./account-role.css']
    
})

export class AccountRolePage {
    constructor(private roleService: RoleService, private accountCreation: AccountCreationPage) { }
    listRole: Role[];
    role: Role;
    ngOnInit() {
        this.roleService.listRoles().subscribe(
            response => {
                this.listRole = response.body;
            }
        );
    }
    select(role:any){
        this.accountCreation.setRole(role);
    }
}