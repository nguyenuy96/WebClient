import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Product, ShoppingCart } from "src/app/components/interface/interface";
import { RestAPI } from "src/app/services/rest-api";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'product-detail-dialog',
    templateUrl: './product-detail-dialog.html',
    styleUrls: ['./product-detail-dialog.css']
})

export class ProductDetailDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: Product, private restAPI: RestAPI, private cookie: CookieService, private formBuilder: FormBuilder){

    }

    imageUrl:string;
    product: Product;
    shoppingCart: ShoppingCart[];
    shoppingCartForm: FormGroup;
    amount: number;
    ngOnInit() {
        this.product = this.data;
        this.imageUrl = this.restAPI.imageUrl + '/' + this.product.image.imageName;
        console.log(this.data);
        this.initForm();
    }

    initForm() {
        this.shoppingCartForm = this.formBuilder.group({
            amount: ['1']
        })
    }
    addProductIntoCart() {
        let cart = this.cookie.get('cart');
        this.amount = this.shoppingCartForm.get('amount').value;
        if(cart == '') {
            this.shoppingCart = [];
        }else {
            this.shoppingCart = JSON.parse(cart);
        }
        console.log(this.shoppingCart)
        this.shoppingCart.push({product: this.product, amount: this.amount});
        this.cookie.set('cart', JSON.stringify(this.shoppingCart));
        console.log(JSON.parse(this.cookie.get('cart')))
    }
}