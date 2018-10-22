import { Component } from "@angular/core";
import { AccountCreationPage } from "../account-creation";

@Component({
    selector: 'last-step',
    templateUrl: './last-step.html',
})
export class LastStepComponent{

    constructor(private accountCreation: AccountCreationPage){}
    ngOnInit(){
        
    }
    abc(){
        console.log(this.accountCreation.accountRolePage.roleForm.value);
    }
}