import { Component } from "@angular/core";
import { RoleService } from "../../../../../../services/role.service";
import { Role } from "../../../../../interface/interface";
import { AccountProfilePage } from "../account-profile/account-profile";
//import { AccountCreationPage } from "../account-creation";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
    selector: 'account-role',
    templateUrl: './account-role.html',
    styleUrls: ['./account-role.css'],
})

export class AccountRolePage {
    roleForm = new FormGroup({});
    constructor(private roleService: RoleService, private formBuilder: FormBuilder) { }
    listRole: Role[];
    role: Role;
    
    ngOnInit() {
        this.roleForm = this.formBuilder.group({
            role: ['', Validators.required]
        })
        this.roleService.listRoles().subscribe(
            response => {
                this.listRole = response.body;
            }
        );
    }
    roleSubmit(){
        this.role = this.roleForm.value.role;
    }
}