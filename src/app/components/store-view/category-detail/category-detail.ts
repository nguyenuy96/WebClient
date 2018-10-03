import { Component } from "@angular/core";
interface Product {
    name: string;
    image: string;
    price: string;
}
@Component({
    selector: 'category-detail',
    templateUrl: './category-detail.html',
    styleUrls: ['./category-detail.css']
})
export class ProductCategoryDetail {
    products: Product[] = [
        { name: 'NÓN PHÙ THỦY', image: '', price: '3200' },
        { name: 'ĐỒNG HỒ CÁT', image: '', price: '3200' },
        { name: 'DÂY CHUYỀN CHỮ THẬP', image: '', price: '3800' },
        { name: 'GƯƠM CỦA VUA VÔ DANH', image: '', price: '3600' },
        { name: 'HUYẾT KIẾM', image: '', price: '3800' },
        { name: 'VÔ CỰC KIẾM', image: '', price: '3100' }
    ]
}