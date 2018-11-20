import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpEvent, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { _RequestHeader } from "../header";
import { RestAPI } from "../rest-api";
import { Product, TradeMark, ProductType, Weight, Age, Warehouse, Image, ProductStorageReceipt } from "../../components/interface/interface";

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

    //
    //list
    

    
    

    

    

   
    //get By Id
    

    
    //get By Name
    


    //delete









}

