import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "../interface/interface";
import { MatDialog } from "@angular/material";
import { ShoppingCartDialog } from "../admin/management-page/product-page/product-dialog/shopping-cart/shopping-cart";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.css']
})

export class HomePage {
    value = "";
    account: any;
    isLogined: boolean;
    constructor(private router: Router, public dialog: MatDialog) { }
    ngOnInit() {
        var account = sessionStorage.user;
        this.isLogined = account == undefined ? false : true;
        if (this.isLogined) {
            this.account = JSON.parse(account);
            if (this.account.role.searchName == "Customer") {
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
        sessionStorage.removeItem('token');
        this.account = undefined;
        this.ngOnInit();
    }

    openCardDialog() {
        const dialogRef = this.dialog.open(ShoppingCartDialog, {
            width: '80%'
        });

    }

}