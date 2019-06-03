import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/components/interface/interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteProductComponent>, @Inject(MAT_DIALOG_DATA) public data: Product, private productService: ProductService) { }
  product: Product;
  ngOnInit() {
    this.product = this.data;
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.productId).subscribe(
      resp => {
        alert("Đã xóa sản phẩm " +  this.product.productName)
      }
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
