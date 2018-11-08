import { Component, Inject } from "@angular/core";
import { Product, ProductType, TradeMark } from "../../../../../interface/interface";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ProductService } from "../../../../../../services/product/product.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'edit-product-dialog',
    templateUrl: './edit-product.html',
    styleUrls: ['./edit-product.css']
})

export class EditProductDialog {
    constructor(public dialogRef: MatDialogRef<EditProductDialog>, @Inject(MAT_DIALOG_DATA) public data: Product, private productService: ProductService) { }
    product: Product;
    productTypes: ProductType[];
    tradeMarks: TradeMark[];
    tradeMark: string;
    prodCategory: string;
    ngOnInit() {
        this.product = this.data;
        console.log(this.product.tradeMark.tradeMark);
        this.getProductTypes();
        this.getTradeMarks();
        this.tradeMark = this.product.tradeMark.tradeMark;
        this.prodCategory = this.product.productType.productType;
    }

    getProductTypes() {
        this.productService.getProductTypes().subscribe(
            resp => {
                this.productTypes = resp.body;
            },
            (errMsg: HttpErrorResponse) => {

            }
        )
    }

    getTradeMarks() {
        this.productService.getTradeMarks().subscribe(
            resp => {
                this.tradeMarks = resp.body;
            },
            (errMsg: HttpErrorResponse) => {

            }
        )
    }
}