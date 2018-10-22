import { Component } from "@angular/core";
import { AccountCreationPage } from "../../account-creation";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Role, UserProfile } from "../../../../../../interface/interface";
import { AccountCreationService } from "../../account-creation.service";

@Component({
    selector: 'employee-profile',
    templateUrl: './employee-profile.html',
    styleUrls: ['./employee-profile.css']
})

export class EmployeeProfilePage {
    employeeForm = new FormGroup({});
    constructor(/*private accCreation: AccountCreationPage, */private formBuilder: FormBuilder, private a: AccountCreationService) { }
    userProfile: UserProfile;
    fullname = '';
    address = '';
    phone = '';
    nationality = '';
    role: Role;
    genders: string[] = ['Nam', 'Nu'];
    nations = [
        { value: 'Viet Nam' },
        { value: 'USA' },
        { value: 'Singapore' }
    ];
    
    ngOnInit(){
        console.log(this.role);
        this.employeeForm = this.formBuilder.group({
            employee: this.formBuilder.group({
                name: ['', Validators.required],
                address: ['', Validators.required],
                phoneNumber: ['', Validators.required],
                nationality: ['', Validators.required],
                identification: ['', Validators.required],
                gender: ['', Validators.required]
            })
        })
    }
    submitEmpl(){
        this.userProfile = this.employeeForm.value.employee;
    }

}