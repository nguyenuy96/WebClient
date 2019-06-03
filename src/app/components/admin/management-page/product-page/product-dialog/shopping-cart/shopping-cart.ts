import { Component, ViewChild } from "@angular/core";
import { ProductService } from "src/app/services/product/product.service";
import { CookieService } from "ngx-cookie-service";
import { Cart, ShoppingCart, Product, Order } from "src/app/components/interface/interface";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PayPalConfig, PayPalIntegrationType, PayPalEnvironment } from "ngx-paypal";

@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.html',
    styleUrls: ['./shopping-cart.css']
})

export class ShoppingCartDialog {
    displayedColumns: string[] = ['productName', 'unitPrice', 'amount', 'totalPrice', 'remove'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    constructor(private productService: ProductService, private cookie: CookieService, private formBuilder: FormBuilder) { }
    cart: Cart;
    shoppingCart: ShoppingCart[];
    dataSource: any;
    selection: any;
    product: Product;
    amount: number;
    formGroup: FormGroup;
    diliveryInforGroup: FormGroup;
    totalAmount = 0;
    totalPrice = 0;
    isLogin = false;
    address: string;
    phone: string;
    payments: string[] = ['Thanh toán trực tuyến', 'Thanh toán khi giao hàng'];
    order: Order;
    ngOnInit() {
        this.checkLogin();
        this.getCart();
        this.formGroup = this.formBuilder.group({
            amount: [''],
            payments: ['']
        })
    }

    inputOnChange(shoppingCart: ShoppingCart) {
        shoppingCart.amount = this.formGroup.value.amount;
        this.productService.addProductIntoCart(shoppingCart).subscribe(
            resp => {
                this.totalAmount = 0;
                this.totalPrice = 0;
                this.ngOnInit();
            }
        )
    }

    getCart() {
        let cartStr = this.cookie.get('cart');
        if (cartStr != '') {
            let cart = JSON.parse(cartStr);
            this.cart = cart;
            this.productService.getCart(this.cart.cartId).subscribe(
                resp => {
                    this.shoppingCart = resp.body;
                    this.dataSource = new MatTableDataSource<ShoppingCart>(this.shoppingCart);
                    this.selection = new SelectionModel<ShoppingCart>(true, []);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    for (var i = 0; i < this.shoppingCart.length; i++) {
                        this.totalAmount += this.shoppingCart[i].amount;
                        this.totalPrice += this.shoppingCart[i].amount * this.shoppingCart[i].cartDetailId.product.unitPrice;
                    }
                    this.initConfig();
                }
            )
        }
    }
    removeProductFromCart(productId: number, cartId: number) {
        this.productService.removeProductFromCart(productId, cartId).subscribe(
            resp => {
                this.totalAmount = 0;
                this.totalPrice = 0;
                this.ngOnInit();
            }
        )
    }

    public payPalConfig?: PayPalConfig;

    private initConfig(): void {
        this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
            commit: true,
            client: {
                sandbox: 'Abv2dBDNobajnlYfAzm4SvrETht3ez0Sw0kGYoV7Qgors58T3uk35ky9in2Wy6GddQOY-nnnm_K_1pqt',
            },
            button: {
                label: 'paypal',
            },
            onPaymentComplete: (data, actions) => {
                let payment = "Trực tuyến";
                let addressDelivery = this.address;
                let phoneDelivery = this.phone;
                let isPay = true;
                let isDelivery = false;
                let customer = JSON.parse(sessionStorage.user).customer;
                let cart = JSON.parse(this.cookie.get('cart'));
                let orderState = "Waiting";
                let order = { orderState: orderState, payments: payment, addressDelivery: addressDelivery, phoneDelivery: phoneDelivery, pay: isPay, delivery: isDelivery, customer: customer, cart: cart };
                this.productService.saveOrder(order).subscribe(resp => {
                    this.cookie.delete('cart');
                    this.shoppingCart = undefined;
                    this.ngOnInit();
                })
            },
            onCancel: (data, actions) => {
                console.log('OnCancel');
            },
            onError: (err) => {
                console.log('OnError');
            },
            transactions: [{
                amount: {
                    currency: 'USD',
                    total: this.totalPrice
                },
            }]
        });
    }


    checkLogin() {
        let user = sessionStorage.user;
        if ((user != '') && (user != undefined)) {
            this.isLogin = true;
        } else {
            this.isLogin = false;
        }
    }

    diliveryInformation() {

    }

    diliveryInforFormInit() {
        this.diliveryInforGroup = this.formBuilder.group({
            address: ['', Validators.required],
            phone: ['', Validators.required]
        })
    }

    payRecieve() {
        let payment = "Giao hàng";
        let addressDelivery = this.address;
        let phoneDelivery = this.phone;
        let isPay = true;
        let isDelivery = false;
        let customer = JSON.parse(sessionStorage.user).customer;
        let cart = JSON.parse(this.cookie.get('cart'));
        let orderState = "Waiting";
        let order = { orderState: orderState, payments: payment, addressDelivery: addressDelivery, phoneDelivery: phoneDelivery, pay: isPay, delivery: isDelivery, customer: customer, cart: cart };
        this.productService.saveOrder(order).subscribe(resp => {
            this.cookie.delete('cart');
            this.shoppingCart = undefined;
            this.ngOnInit();
        })
    }
}