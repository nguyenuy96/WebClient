import { Component, Inject } from "@angular/core";
import { Product, ProductType, TradeMark, Image } from "../../../../../interface/interface";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ProductService } from "../../../../../../services/product/product.service";
import { HttpErrorResponse, HttpEventType } from "@angular/common/http";
import { RestAPI } from "../../../../../../services/rest-api";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: 'edit-product-dialog',
    templateUrl: './edit-product.html',
    styleUrls: ['./edit-product.css']
})

export class EditProductDialog {
    constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditProductDialog>, @Inject(MAT_DIALOG_DATA) public data: Product, private productService: ProductService, private restAPI: RestAPI) { }
    product: Product;
    productTypes: ProductType[];
    tradeMarks: TradeMark[];
    tradeMark: string;
    prodCategory: string;
    selectedFiles: FileList;
    imageFile: File;
    imageUrl: string;
    image: Image;
    productForm: FormGroup;
    ngOnInit() {
        this.product = this.data;
        console.log(this.product)
        this.getProductTypes();
        this.getTradeMarks();
        this.tradeMark = this.product.tradeMark.tradeMark;
        this.prodCategory = this.product.productType.productType;
        if (this.product.image != null)
            this.imageUrl = this.restAPI.imageUrl + this.product.image.imageName;
        else
            this.imageUrl = "..."
        this.initForm();
    }

    initForm() {
        this.productForm = this.formBuilder.group({
            productName: [this.product.productName],
            productType: [this.product.productType.productType],
            tradeMark: [this.product.tradeMark.tradeMark],
            weight: [''],
            age: [''],
            unitPrice: [''],
            desciption: ['']
        })
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

    listAge(){
    }

    getTradeMark(){
        this.productService.getTradeMark(1).subscribe(
            resp => {
                console.log(resp.body);
            },
            (errMsg: HttpErrorResponse) => {
                console.log('adsf')
            }
        )
    }

    getTradeMarkByName(){
        var tradeMark = this.productForm.value.tradeMark;
        console.log(tradeMark);
        this.productService.getTradeMarkByName(tradeMark).subscribe(
            resp => {
                console.log(resp.body);
            },
            (errMsg: HttpErrorResponse) => {
                console.log('sd');
            }
        )
    }
    onSelectProType(proType: ProductType){
        console.log(proType);
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
            this.data = this.product;
        },
            (errMesg: HttpErrorResponse) => {
            }
        )
    }

    onSubmit(){
        console.log(this.productForm.value);
        
        this.getTradeMarkByName();
    }
}