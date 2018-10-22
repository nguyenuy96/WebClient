import { AccountCreationPage } from "./account-creation";
import { Injectable } from "@angular/core";
import { Account } from "../../../../interface/interface";
@Injectable()
export class AccountCreationService{
    constructor(){}
    account: Account;
    setAccount(account: Account){
        this.account = account;
    }
}