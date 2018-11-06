import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ProductType, TradeMark } from "../../../../interface/interface";
import { ProductService } from "../../../../../services/product/product.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector: 'add-product',
    templateUrl: './add-product.html',
    styleUrls: ['./add-product.css']
})

export class AddProductComponent {




    constructor(private productService: ProductService) { }
    productTypes: ProductType[];
    tradeMarks: TradeMark[];
    image: File;

    ngOnInit(){
        this.getProductTypes();
        this.getTradeMarks();
    }
    onFileChange(event) {
        this.image = event.target.files;
        console.log(this.image)
    }

    getProductTypes() {
        this.productService.getProductTypes().subscribe(
            resp => {
                this.productTypes = resp.body;
                console.log(this.productTypes)
            },
            (errMsg: HttpErrorResponse) => {

            }
        )
    }

    getTradeMarks() {
        this.productService.getTradeMarks().subscribe(
            resp => {
                this.tradeMarks = resp.body;
                console.log(this.tradeMarks)
            },
            (errMsg: HttpErrorResponse) => {

            }
        )
    }


}