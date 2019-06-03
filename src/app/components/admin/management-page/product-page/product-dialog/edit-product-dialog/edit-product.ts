import { Component, Inject } from "@angular/core";
import { Product, ProductType, TradeMark, Image, Age, Weight } from "../../../../../interface/interface";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ProductService } from "../../../../../../services/product/product.service";
import { HttpErrorResponse, HttpEventType } from "@angular/common/http";
import { RestAPI } from "../../../../../../services/rest-api";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
    ages: Age[];
    weights: Weight[];
    prodCategory: string;
    selectedFiles: FileList;
    imageFile: File;
    imageUrl: string;
    image: Image;
    productForm: FormGroup;

    ngOnInit() {
        this.product = this.data;
        this.initForm();
        if (this.product.image != null)
            this.imageUrl = this.restAPI.imageUrl + '/' + this.product.image.imageName;
        else
            this.imageUrl = "..."
    }

    initForm() {
        this.productForm = this.formBuilder.group({
            productName: ['', Validators.required],
            productType: [''],
            tradeMark: [''],
            weight: [''],
            age: [''],
            unitPrice: [''],
            description: [''],
            productImage: [''],
            preservation: [''],
            ingredient: [''],
            manufDate: [''],
            expiryDate: [''],
        });

        this.listProductTypes();
        this.listTradeMarks();
        this.listAges();
        this.listWeights();
        this.getDescription();
        this.getProductName();
        this.getUnitPrice();
        this.getIngredient();
        this.getPreservation();
        this.getManufDate();
        this.getExpiryDate();
    }

    listProductTypes() {
        this.productService.listProductTypes().subscribe(
            resp => {
                this.productTypes = resp.body;
                const prodTypeSelected = this.productTypes.find(prodType => prodType.productTypeId == this.product.productType.productTypeId);
                this.productForm.get('productType').setValue(prodTypeSelected);
            },
            (errMsg: HttpErrorResponse) => {

            }
        )
    }

    listTradeMarks() {
        this.productService.listTradeMarks().subscribe(
            resp => {
                this.tradeMarks = resp.body;
                const tradeMarkSelected = this.tradeMarks.find(tradeMark => tradeMark.tradeMarkId == this.product.tradeMark.tradeMarkId);
                this.productForm.get('tradeMark').setValue(tradeMarkSelected);
            },
            (errMsg: HttpErrorResponse) => {

            }
        )
    }

    listAges() {
        this.productService.listAges().subscribe(
            resp => {
                this.ages = resp.body;
                if (this.product.age != null) {
                    const ageSelected = this.ages.find(age => age.ageId == this.product.age.ageId);
                    this.productForm.get('age').setValue(ageSelected);
                }
            }
        )
    }

    listWeights() {
        this.productService.listWeights().subscribe(
            resp => {
                this.weights = resp.body;
                if (this.product.weight != null) {
                    const weightSelected = this.weights.find(weight => weight.weightId == this.product.weight.weightId);
                    this.productForm.get('weight').setValue(weightSelected);
                }
            }
        )
    }

    getDescription() {
        this.productForm.get('description').setValue(this.product.description);
    }

    getPreservation() {
        this.productForm.get('preservation').setValue(this.product.preservation);
    }

    getIngredient() {
        this.productForm.get('ingredient').setValue(this.product.ingredient);
    }

    getManufDate() {
        this.productForm.get('manufDate').setValue(this.product.manufDate);
    }

    getExpiryDate() {
        this.productForm.get('expiryDate').setValue(this.product.expiryDate);
    }
    getProductName() {
        this.productForm.get('productName').setValue(this.product.productName);
    }

    getUnitPrice() {
        this.productForm.get('unitPrice').setValue(this.product.unitPrice);
    }

    uploadImage(event) {
        let a = true;
        this.selectedFiles = event.target.files;
        this.imageFile = this.selectedFiles.item(0);
        this.productService.saveImage(this.imageFile).subscribe(resp => {
            // if (event.type === HttpEventType.UploadProgress) {
            //   this.progress.percentage = Math.round(100 * event.loaded / event.total);
            // } else if (event instanceof HttpResponse) {
            //   console.log('File is completely uploaded!');
            // }
            setTimeout(() => {
                this.image = resp.body;
                this.imageUrl = this.restAPI.imageUrl + "/" + this.image.imageName;
            }, 4000)

        });

        this.selectedFiles = undefined;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    modifyProduct() {
        if (this.productForm.get('productName').dirty)
            this.product.productName = this.productForm.value.productName;
        if (this.productForm.get('productType').dirty)
            this.product.productType = this.productForm.value.productType;
        if (this.productForm.get('tradeMark').dirty)
            this.product.tradeMark = this.productForm.value.tradeMark;
        if (this.productForm.get('age').dirty)
            this.product.age = this.productForm.value.age;
        if (this.productForm.get('weight').dirty)
            this.product.weight = this.productForm.value.weight;
        if (this.productForm.get('unitPrice').dirty)
            this.product.unitPrice = this.productForm.value.unitPrice;
        if (this.productForm.get('description').dirty)
            this.product.description = this.productForm.value.description;
        if (this.productForm.get('productImage').dirty)
            this.product.image = this.image;
        if (this.productForm.get('ingredient').dirty)
            this.product.ingredient = this.productForm.value.ingredient;
        if (this.productForm.get('preservation').dirty)
            this.product.preservation = this.productForm.value.preservation;
        if (this.productForm.get('manufDate').dirty)
            this.product.manufDate = this.productForm.value.manufDate;
        if (this.productForm.get('expiryDate').dirty)
            this.product.expiryDate = this.productForm.value.expiryDate;
        this.productService.saveProduct(this.product).subscribe(
            resp => {
                console.log("Modify Product Successfully!")
            },
            (errMsg: HttpErrorResponse) => {
                console.log("Modify Product Fail!")
            }
        )
    }
}