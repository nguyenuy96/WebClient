import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { _RequestHeader } from "../header";
import { RestAPI } from "../rest-api";
import { Product, TradeMark, ProductType, Weight, Age, Warehouse, Image, ProductStorageReceipt } from "../../components/interface/interface";

@Injectable()
export class ProductService {
    constructor(private httpClient: HttpClient, private requestHeader: _RequestHeader, private restAPI: RestAPI) { }

    //save
    saveProduct(product: Product): Observable<HttpResponse<Object>> {
        return this.httpClient.post<Product>(this.restAPI.saveProductUrl, product, {
            headers: this.requestHeader.httpHeader, observe: 'response'
        });
    }

    saveImage(file: File): Observable<HttpResponse<Image>> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        return this.httpClient.post<Image>(this.restAPI.saveImageUrl, formData, { headers: this.requestHeader.imageHeader, observe: 'response' });
    }

    saveProductStorageRec(productStorageRec: ProductStorageReceipt): Observable<HttpResponse<Object>> {
        return this.httpClient.post<ProductStorageReceipt>(this.restAPI.saveProStorageRec, productStorageRec, {
            headers: this.requestHeader.httpHeader, observe: 'response'
        });
    }

    //list
    listProduct(): Observable<HttpResponse<Product[]>> {
        return this.httpClient.get<Product[]>(this.restAPI.listProductUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }

    listTradeMarks(): Observable<HttpResponse<TradeMark[]>> {
        return this.httpClient.get<TradeMark[]>(this.restAPI.listTradeMarkUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }
    listProductTypes(): Observable<HttpResponse<ProductType[]>> {
        return this.httpClient.get<ProductType[]>(this.restAPI.listProductTypeUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }

    listAges(): Observable<HttpResponse<Age[]>> {
        return this.httpClient.get<Age[]>(this.restAPI.listAgeUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }

    listWeights(): Observable<HttpResponse<Weight[]>> {
        return this.httpClient.get<Weight[]>(this.restAPI.listWeightUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }

    listWarehouses(): Observable<HttpResponse<Warehouse[]>> {
        return this.httpClient.get<Warehouse[]>(this.restAPI.listWarehouseUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }
    //get By Id
    getTradeMark(tradeMarkId: number): Observable<HttpResponse<TradeMark>> {
        let url = 'http://localhost:8888/trademark/getByName/{tradeMarkId}';
        return this.httpClient.get<TradeMark>(url, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }

    getProdStorageRec(productId: number): Observable<HttpResponse<ProductStorageReceipt[]>> {
        let url = this.restAPI.getProdStorageRecUrl + `${productId}`;
        return this.httpClient.get<ProductStorageReceipt[]>(url, { headers: this.requestHeader.httpHeader, observe: 'response' })
    }
    //get By Name
    getTradeMarkByName(tradeMark: string): Observable<HttpResponse<TradeMark>> {
        let url = this.restAPI.labelByNameUrl + `${tradeMark}`;
        console.log(url);
        return this.httpClient.get<TradeMark>(url, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }


    //delete









}

