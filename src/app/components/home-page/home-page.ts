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
    constructor(private router: Router) { }
    ngOnInit() {
        if (sessionStorage.length > 0)
            this.account = JSON.parse(sessionStorage.user);
        console.log(this.account);
        if (this.account == null || this.account.accountRole.account_role == "Customer") {
            this.router.navigate([{ outlets: { home: ['store-page'] } }]);
        } else {
            this.router.navigate([{ outlets: { home: ['admin-page'] } }]);
        }
    }
    logOut(){
        sessionStorage.removeItem('user');
        this.ngOnInit();
    }
}