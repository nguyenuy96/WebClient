import { Component, ViewChild, ChangeDetectorRef } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup } from "@angular/forms";
import { ProductType, TradeMark, Age, Weight, Image, Product } from "../../../../interface/interface";
import { ProductService } from "../../../../../services/product/product.service";
import { HttpErrorResponse } from "@angular/common/http";
import { RestAPI } from "src/app/services/rest-api";
import { ManageProductComponent } from "../manage-product/manage-product";
import { MatTabChangeEvent } from "@angular/material";
@Component({
    selector: 'add-product',
    templateUrl: './add-product.html',
    styleUrls: ['./add-product.css'],
    providers: [ManageProductComponent]
})

export class AddProductComponent {
    constructor(private productService: ProductService, private formBuilder: FormBuilder, private restAPI: RestAPI, private prodComponent: ManageProductComponent) { }
    productTypes: ProductType[];
    tradeMarks: TradeMark[];
    ages: Age[];
    weights: Weight[];
    productForm: FormGroup;
    imageFile: File;
    imageUrl: string;
    image: Image;
    selectedFiles: FileList;
    product: Product;
    changeDetectorRefs: ChangeDetectorRef;
    ngOnInit() {
        this.getProductTypes();
        this.getTradeMarks();
        this.listAge();
        this.listWeight();
        this.initForm();
        this.imageUrl = "./../../assets/img/image.png";
    }
    onFileChange(event) {
        this.image = event.target.files;
        console.log(this.image)
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
            setTimeout(() => {
            this.image = resp.body;
                this.imageUrl = this.restAPI.imageUrl + "/" + this.image.imageName;
            }, 4000)
            // this.image = resp.body;
            // this.imageUrl = this.restAPI.imageUrl +'/'+ this.image.imageName;
        });

        this.selectedFiles = undefined;
    }
    initForm() {
        this.productForm = this.formBuilder.group({
            productName: ['', Validators.required],
            productType: ['', Validators.required],
            tradeMark: ['', Validators.required],
            age: [''],
            manufDate: [new Date()],
            expiryDate: [new Date()],
            weight: [''],
            unitPrice: ['', Validators.required],
            net: [''],
            description: ['', Validators.required],
            productImage: [''],
            preservation:[''],
            ingredient:['']
        })
    }

    openImage() {
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

    listAge() {
        this.productService.listAges().subscribe(
            resp => {
                this.ages = resp.body;
            }
        )
    }

    listWeight() {
        this.productService.listWeights().subscribe(
            resp => {
                this.weights = resp.body;
            }
        )
    }

    saveProduct(event: MatTabChangeEvent) {
        this.productForm.value.image = this.image;
        this.product = this.productForm.value;
        console.log(this.product);
        if (this.productForm.valid) {
            this.productService.saveProduct(this.product).subscribe(
                resp => {
                    this.imageUrl = "./../../assets/img/image.png";
                    alert("Thêm mới sản phẩm " + this.product.productName)
                    this.prodComponent.ngOnInit();
                    this.productForm.reset();
                },
                (errMsg: HttpErrorResponse) => {
                    alert("Tên sản phẩm đã có")
                }
            )
        }else {
            alert("Vui lòng nhập đầy đủ thông tin!")
        }

    }

}