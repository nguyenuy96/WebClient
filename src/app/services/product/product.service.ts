import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpEvent, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { _RequestHeader } from "../header";
import { RestAPI } from "../rest-api";
import { Product, TradeMark, ProductType, Weight, Age, Warehouse, Image, ProductStorageReceipt, Cart, ShoppingCart, Order, ExportRec, Country } from "../../components/interface/interface";

@Injectable()
export class ProductService {
    constructor(private httpClient: HttpClient, private requestHeader: _RequestHeader, private restAPI: RestAPI) { }

    //product

    saveProduct(product: Product): Observable<HttpResponse<Object>> {
        return this.httpClient.post<Product>(this.restAPI.productUrl, product, {
            headers: this.requestHeader.httpHeader(), observe: 'response'
        });
    }

    listProduct(): Observable<HttpResponse<Product[]>> {
        return this.httpClient.get<Product[]>(this.restAPI.productUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    deleteProduct(productId: number): Observable<{}> {
        let url = this.restAPI.productUrl + "/" + `${productId}`;
        return this.httpClient.delete(url, { headers: this.requestHeader.httpHeader() });
    }
    //image

    saveImage(file: File): Observable<HttpResponse<Image>> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        return this.httpClient.post<Image>(this.restAPI.imageUrl, formData, { headers: this.requestHeader.imageHeader(), observe: 'response' });
    }

    //product storage

    saveProductStorageRec(productStorageRec: ProductStorageReceipt): Observable<HttpResponse<Object>> {
        return this.httpClient.post<ProductStorageReceipt>(this.restAPI.storageUrl, productStorageRec, {
            headers: this.requestHeader.httpHeader(), observe: 'response'
        });
    }

    getProdStorageRec(productId: number): Observable<HttpResponse<ProductStorageReceipt[]>> {
        let url = this.restAPI.storageUrl + `${productId}`;
        return this.httpClient.get<ProductStorageReceipt[]>(url, { headers: this.requestHeader.httpHeader(), observe: 'response' })
    }

    // trade mark

    getTradeMark(tradeMarkId: number): Observable<HttpResponse<TradeMark>> {
        let url = 'http://localhost:8888/trademark/getByName/{tradeMarkId}';
        return this.httpClient.get<TradeMark>(url, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    listTradeMarks(): Observable<HttpResponse<TradeMark[]>> {
        return this.httpClient.get<TradeMark[]>(this.restAPI.tradeMarkUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    getTradeMarkByName(tradeMark: string): Observable<HttpResponse<TradeMark>> {
        let url = this.restAPI.labelByNameUrl + `${tradeMark}`;
        console.log(url);
        return this.httpClient.get<TradeMark>(url, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    saveTradeMark(tradeMark: any): Observable<{}> {
        return this.httpClient.post(this.restAPI.tradeMarkUrl, tradeMark, { headers: this.requestHeader.httpHeader(), observe: 'response' })
    }

    //age

    listAges(): Observable<HttpResponse<Age[]>> {
        return this.httpClient.get<Age[]>(this.restAPI.ageUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    //weight

    listWeights(): Observable<HttpResponse<Weight[]>> {
        return this.httpClient.get<Weight[]>(this.restAPI.weightUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    //warehouse

    listWarehouses(): Observable<HttpResponse<Warehouse[]>> {
        return this.httpClient.get<Warehouse[]>(this.restAPI.warehouseUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    //product type

    listProductTypes(): Observable<HttpResponse<ProductType[]>> {
        return this.httpClient.get<ProductType[]>(this.restAPI.productTypeUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    saveProductType(productType: ProductType): Observable<{}> {
        return this.httpClient.post(this.restAPI.productTypeUrl, productType, { headers: this.requestHeader.httpHeader(), observe: 'response' })
    }
    //cart

    addCart(): Observable<HttpResponse<Cart>> {
        return this.httpClient.get<Cart>(this.restAPI.cartUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' })
    }

    addProductIntoCart(shoppingCart: ShoppingCart): Observable<HttpResponse<ShoppingCart>> {
        return this.httpClient.post<ShoppingCart>(this.restAPI.cartUrl, shoppingCart, { headers: this.requestHeader.httpHeader(), observe: 'response' })
    }

    getCart(cartId: number): Observable<HttpResponse<ShoppingCart[]>> {
        let cartUrl = this.restAPI.cartUrl + "/" + `${cartId}`;
        return this.httpClient.get<ShoppingCart[]>(cartUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' })
    }

    removeProductFromCart(productId: number, cartId: number): Observable<{}> {
        let url = this.restAPI.cartUrl + "/" + `${productId}` + "/" + `${cartId}`;
        return this.httpClient.delete(url);
    }
    //order
    saveOrder(order: any): Observable<HttpResponse<Order>> {
        return this.httpClient.post<Order>(this.restAPI.orderUrl, order, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    getOrderByCustomer(customerId: number, orderState: string): Observable<HttpResponse<Order[]>> {
        let url = this.restAPI.orderUrl + "/owner/" + `${customerId}` + "/" + `${orderState}`;
        return this.httpClient.get<Order[]>(url, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    getOrderByOrderStateOfCus(customerId: number, orderState: string): Observable<HttpResponse<Order[]>> {
        let url = this.restAPI.orderUrl + "/owner" + `${customerId}` + "/" + `${orderState}`;
        return this.httpClient.get<Order[]>(url, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }

    getOrderByState(orderState: string): Observable<HttpResponse<Order[]>> {
        let url = this.restAPI.orderUrl + "/" + `${orderState}`;
        return this.httpClient.get<Order[]>(url, { headers: this.requestHeader.httpHeader(), observe: 'response' })
    }

    //export 
    saveExportRec(orderId: number, exportRec: ExportRec): Observable<{}> {
        let exportRecUrl = this.restAPI.exportRecUrl + "/" + `${orderId}`;
        return this.httpClient.post(exportRecUrl, exportRec, { headers: this.requestHeader.httpHeader() })
    }

    getCountry(): Observable<HttpResponse<Country[]>> {
        return this.httpClient.get<Country[]>(this.restAPI.countryUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' })
    }

    saveCountry(country: any): Observable<{}> {
        return this.httpClient.post(this.restAPI.countryUrl, country, { headers: this.requestHeader.httpHeader(), observe: 'response' })
    }





    //get By Id



    //get By Name



    //delete









}

