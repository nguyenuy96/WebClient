import { Component, Inject, ViewChild, Input } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Product, ShoppingCart, Cart, CartDetailId } from "src/app/components/interface/interface";
import { RestAPI } from "src/app/services/rest-api";
import { CookieService } from "ngx-cookie-service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ProductService } from "src/app/services/product/product.service";
import { HttpErrorResponse } from "@angular/common/http";
import { HomePage } from "src/app/components/home-page/home-page";

@Component({
    selector: 'product-detail-dialog',
    templateUrl: './product-detail-dialog.html',
    styleUrls: ['./product-detail-dialog.css'],
    providers: [HomePage]
})

export class ProductDetailDialog {
    @Input() home: HomePage;
    constructor(@Inject(MAT_DIALOG_DATA) public data: Product, private restAPI: RestAPI, private cookie: CookieService, private formBuilder: FormBuilder, private productService: ProductService, private homePage: HomePage) {

    }

    imageUrl: string;
    product: Product;
    shoppingCart: ShoppingCart;
    shoppingCartForm: FormGroup;
    amount: number;
    ngOnInit() {
        this.product = this.data;
        this.imageUrl = this.restAPI.imageUrl + '/' + this.product.image.imageName;
        this.initForm();
    }

    initForm() {
        this.shoppingCartForm = this.formBuilder.group({
            amount: [1]
        })
    }
    addProductIntoCart() {
        let cartStr = this.cookie.get('cart');
        this.amount = this.shoppingCartForm.get('amount').value;
        let cart: Cart;
        let cartDetailId: CartDetailId;
        if (cartStr == '') {
            this.productService.addCart().subscribe(
                resp => {
                    cart = resp.body;
                    this.cookie.set('cart', JSON.stringify(resp.body));
                    cartDetailId = { cart: cart, product: this.product };
                    this.shoppingCart = { cartDetailId: cartDetailId, amount: this.amount };
                    this.addShoppingCart(this.shoppingCart);
                }
            )
        } else {
            cart = JSON.parse(cartStr);
            cartDetailId = { cart: cart, product: this.product };
            this.shoppingCart = { cartDetailId: cartDetailId, amount: this.amount };
            this.addShoppingCart(this.shoppingCart);
        }
    }

    addShoppingCart(shoppingCart: ShoppingCart) {
        this.productService.addProductIntoCart(shoppingCart).subscribe(
            resp => {
                this.homePage.ngOnInit();
            }
        )
    }
}