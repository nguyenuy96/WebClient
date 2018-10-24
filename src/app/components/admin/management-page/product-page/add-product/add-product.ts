import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
export interface Category {
    name: string;
}

export interface Inventory {
    name: string;
}
export interface Trademark {
    name: string
}
@Component({
    selector: 'add-product',
    templateUrl: './add-product.html',
    styleUrls: ['./add-product.css']
})

export class AddProductComponent {
    categories: Category[] = [
        { name: 'Sữa em bé' },
        { name: 'Quần áo sơ sinh' },
        { name: 'Sữa mẹ' },
        { name: 'Quần áo trẻ nhỏ' },
        { name: 'Dụng cụ vệ sinh cho bé' },
        { name: 'Tã lót em bé' },
        { name: 'Dụng cụ cho bé ăn' },
    ];
    inventories: Inventory[] = [
        { name: 'Thành Phố Hồ Chí Minh' },
        { name: 'Đà Nẵng' },
        { name: 'Hà Nội' },
        { name: 'Cần Thơ' }
    ];
    trademarks: Trademark[] = [
        { name: 'Dielac' },
        { name: 'Friso' },
        { name: 'Vinamilk' },
        { name: 'Nhựa chợ lớn' },
        { name: 'Nguyễn Hữu Úy' }
    ]


    image: File;
    onFileChange(event) {
        this.image = event.target.files;
        console.log(this.image)
    }
}