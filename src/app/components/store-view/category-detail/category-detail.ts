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
        { name: 'Alpha IQ Gold', image: './../../assets/img/dielac-alpha-gold-IQ.jpg', price: '3200' },
        { name: 'Alpha IQ Gold', image: './../../assets/img/dielac-alpha.jpg', price: '3200' },
        { name: 'Tã Bobby', image: './../../assets/img/bobby.jpg', price: '3800' },
        { name: 'Friso Gold', image: './../../assets/img/friso-gold.jpg', price: '3600' },
        { name: 'Tã Pampers', image: './../../assets/img/pampers.jpg', price: '3800' },
        { name: 'Tã Huggies', image: './../../assets/img/huggies.jpg', price: '3100' }
    ]
}