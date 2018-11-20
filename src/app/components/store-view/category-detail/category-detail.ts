import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product/product.service";
import { Product } from "../../interface/interface";
import { RestAPI } from "src/app/services/rest-api";
import { MatDialog } from "@angular/material";
import { ProductDetailDialog } from "../../admin/management-page/product-page/product-dialog/product-detail-dialog/product-detail-dialog";

@Component({
    selector: 'category-detail',
    templateUrl: './category-detail.html',
    styleUrls: ['./category-detail.css']
})
export class ProductCategoryDetail {
    constructor(private productService: ProductService, private restAPI: RestAPI, public dialog: MatDialog) { }
    products: Product[];
    imageAPI = this.restAPI.imageUrl;
    ngOnInit() {
        this.listProduct();
    }

    listProduct() {
        this.productService.listProduct().subscribe(
            resp => {
                this.products = resp.body;
            }
        )
    }

    openProdDetailDialog(product: Product) {
        const dialogRef = this.dialog.open(ProductDetailDialog, {
            width: '80%',
            data: product
        });
    }
}