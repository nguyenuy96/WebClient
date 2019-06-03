import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Product, Warehouse, ProductStorageReceipt, Account } from "../../../../../interface/interface";
import { ProductService } from "../../../../../../services/product/product.service";
import { RestAPI } from "../../../../../../services/rest-api";
import { HttpErrorResponse } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'store-product',
    templateUrl: './store-product.html',
    styleUrls: ['./store-product.css']
})

export class StoreProductDialog {
    constructor(private formBulder: FormBuilder, public dialogRef: MatDialogRef<StoreProductDialog>, @Inject(MAT_DIALOG_DATA) public data: Product, private productService: ProductService, private restAPI: RestAPI) { }
    productStorageFrom: FormGroup;
    warehouses: Warehouse[];
    productStorageReceipt: ProductStorageReceipt;
    product: Product;
    account: Account;
    ngOnInit() {
        this.getWarehouse();
        this.product = this.data;
        this.initForm();
    }

    initForm() {
        this.productStorageFrom = this.formBulder.group({
            warehouse: [''],
            amount: ['']
        })
    }
    getWarehouse() {
        this.productService.listWarehouses().subscribe(
            resp => {
                this.warehouses = resp.body;
            },
            (errMesg: HttpErrorResponse) => {

            }
        )
    }

    saveStorageReceipt() {
        this.account = JSON.parse(sessionStorage.user);
        this.productStorageReceipt = { prodStorageReceiptId: 0, product: this.product, warehouse: this.productStorageFrom.get('warehouse').value, amount: this.productStorageFrom.get('amount').value, account: this.account }
        console.log(this.productStorageReceipt);
        this.productService.saveProductStorageRec(this.productStorageReceipt).subscribe(
            resp => {
                alert("Đã nhập " + this.productStorageReceipt.amount + " " + this.productStorageReceipt.product.productName + " vào kho " + this.productStorageReceipt.warehouse.warehouseName)
            },
            (errMsg: HttpErrorResponse) => {
                console.log(errMsg.status);
            }
        )
    }

    onNoClick() {
        this.dialogRef.close();
    }

}