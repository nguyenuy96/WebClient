import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Account, Cart } from "../interface/interface";
import { MatDialog } from "@angular/material";
import { ShoppingCartDialog } from "../admin/management-page/product-page/product-dialog/shopping-cart/shopping-cart";
import { ProductService } from "src/app/services/product/product.service";
import { CookieService } from "ngx-cookie-service";
import { PaymentComponent } from "../admin/management-page/product-page/payment/payment";
import { OrderDialogComponent } from "../admin/management-page/product-page/product-dialog/order-dialog/order-dialog.component";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.css']
})

export class HomePage implements OnInit {
    value = "";
    account: any;
    isLogined: boolean;
    quantityProduct: number;
    constructor(private router: Router, public dialog: MatDialog, private productService: ProductService, private cookie: CookieService) {
    }
    ngOnInit() {
        this.getCart();
        var account = sessionStorage.user;
        this.isLogined = account == undefined ? false : true;
        if (this.isLogined) {
            this.account = JSON.parse(account);
            if (this.account.role.roleName == "Customer") {
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

    openCartDialog() {
        const dialogRef = this.dialog.open(ShoppingCartDialog, {
            width: '80%',
            height: '80%'
        });

    }

    openOrderDialog() {
        const dialogRef = this.dialog.open(OrderDialogComponent, {
            width: '80%',
            height: '80%'
        });

    }

    getCart() {
        let cartStr = this.cookie.get('cart');
        if (cartStr != '') {
            let cart: Cart = JSON.parse(cartStr);
            this.productService.getCart(cart.cartId).subscribe(
                resp => {
                    this.quantityProduct = resp.body.length
                }
            )
        } else {
            this.quantityProduct = 0;
        }
    }

    increase() {
        this.quantityProduct++;
    }

}