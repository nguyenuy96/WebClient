import { Component, Inject } from "@angular/core";
import { Product, ProductType, TradeMark, Image } from "../../../../../interface/interface";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ProductService } from "../../../../../../services/product/product.service";
import { HttpErrorResponse, HttpEventType } from "@angular/common/http";
import { RestAPI } from "../../../../../../services/rest-api";

@Component({
    selector: 'edit-product-dialog',
    templateUrl: './edit-product.html',
    styleUrls: ['./edit-product.css']
})

export class EditProductDialog {
    constructor(public dialogRef: MatDialogRef<EditProductDialog>, @Inject(MAT_DIALOG_DATA) public data: Product, private productService: ProductService, private restAPI: RestAPI) { }
    product: Product;
    productTypes: ProductType[];
    tradeMarks: TradeMark[];
    tradeMark: string;
    prodCategory: string;
    selectedFiles: FileList;
    imageFile: File;
    imageUrl: string;
    image: Image;
    ngOnInit() {
        this.product = this.data;
        this.getProductTypes();
        this.getTradeMarks();
        this.tradeMark = this.product.tradeMark.tradeMark;
        this.prodCategory = this.product.productType.productType;
        if (this.product.image != null)
            this.imageUrl = this.restAPI.imageUrl + this.product.image.imageName;
        else
            this.imageUrl = "..."
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

    uploadImage(event) {
        this.selectedFiles = event.target.files;
        this.imageFile = this.selectedFiles.item(0);
        this.productService.saveImage(this.imageFile).subscribe(resp => {
            // if (event.type === HttpEventType.UploadProgress) {
            //   this.progress.percentage = Math.round(100 * event.loaded / event.total);
            // } else if (event instanceof HttpResponse) {
            //   console.log('File is completely uploaded!');
            // }
            this.image = resp.body;
            this.imageUrl = this.restAPI.imageUrl + this.image.imageName;
        });

        this.selectedFiles = undefined;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    modifyProduct() {
        this.product.image = this.image;
        this.productService.saveProduct(this.product).subscribe(resp => {
            console.log("Modify Successfully!")
            this.data = this.product;
        },
        (errMesg: HttpErrorResponse) => {
            console.log("Modify Fail")
        }
    )
    }
}