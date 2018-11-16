import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ProductType, TradeMark, Age, Weight } from "../../../../interface/interface";
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
    age: Age[];
    weight: Weight[]
    ngOnInit(){
        this.getProductTypes();
        this.getTradeMarks();
    }
    onFileChange(event) {
        this.image = event.target.files;
        console.log(this.image)
    }

    openImage(){
        console.log('ádadasd');
    }
    getProductTypes() {
        this.productService.listProductTypes().subscribe(
            resp => {
                this.productTypes = resp.body;
            },
            (errMsg: HttpErrorResponse) => {

            }
        )
    }

    getTradeMarks() {
        this.productService.listTradeMarks().subscribe(
            resp => {
                this.tradeMarks = resp.body;
            },
            (errMsg: HttpErrorResponse) => {

            }
        )
    }


}