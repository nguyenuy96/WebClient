import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "../interface/interface";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.css']
})

export class HomePage {
    value = "";
    account: any;
    isLogined: boolean;
    constructor(private router: Router) { }
    ngOnInit() {
        var account = sessionStorage.user;
        this.isLogined = account == undefined ? false : true;
        if (this.isLogined) {
            this.account = JSON.parse(account);
            if (this.account.accountRole.account_role == "Customer") {
                this.router.navigate([{ outlets: { home: ['store-page'] } }]);
            } else {
                this.router.navigate([{ outlets: { home: ['admin-page'] } }]);
            }
        } else {
            this.router.navigate([{ outlets: { home: ['store-page'] } }]);
        }
    }
    logOut() {
        sessionStorage.removeItem('user');
        this.account = undefined;
        this.ngOnInit();
    }
}