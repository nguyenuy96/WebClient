import { Component } from "@angular/core";
import { AccountCreationPage } from "../../account-creation";

@Component({
    selector: 'employee-profile',
    templateUrl: './employee-profile.html',
    styleUrls: ['./employee-profile.css']
})

export class EmployeeProfilePage {
    constructor(private accCreation: AccountCreationPage) { }
    employee: any;
    fullname = '';
    address = '';
    phone = '';
    nationality = '';
    gender = '';
    nations = [
        { value: 'Viet Nam' },
        { value: 'USA' },
        { value: 'Singapore' }
    ];
    
    validateEmplProf() {
        var fullname = (document.getElementById('fullname') as HTMLInputElement).value;
        var address = (document.getElementById('address') as HTMLInputElement).value;
        var phone = (document.getElementById('phone') as HTMLInputElement).value;
        var identification = (document.getElementById('identification') as HTMLInputElement).value;
        var gender = this.gender;
        var nationality = this.nationality;
        if (fullname != '' && address != '' && phone != '' && gender != '' && nationality != '' && identification != '') {
            this.accCreation.validateProfile(true);
            this.employee = {name: fullname, address: address, phoneNumber: phone, nationality: nationality, gender: gender, identification: identification};
        } else {
            this.employee = undefined;
            this.accCreation.validateProfile(false);
        }
        this.accCreation.setEmplProf(this.employee);
    }
    selectGender(gender: any) {
        this.gender = gender;
        this.validateEmplProf();
    }
    selectNation(nation: any) {
        this.nationality = nation;
        this.validateEmplProf();
    }
}