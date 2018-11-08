import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { _RequestHeader } from "../header";
import { RestAPI } from "../rest-api";
import { Product, TradeMark, ProductType, Weight, Age, Warehouse } from "../../components/interface/interface";

@Injectable()
export class ProductService {
    constructor(private httpClient: HttpClient, private requestHeader: _RequestHeader, private restAPI: RestAPI) { }

    listProduct(): Observable<HttpResponse<Product[]>> {
        return this.httpClient.get<Product[]>(this.restAPI.listProductUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }

    saveProduct(product: Product): Observable<HttpResponse<Object>> {
        return this.httpClient.post<Product>(this.restAPI.saveProductUrl, product, {
            headers: this.requestHeader.httpHeader, observe: 'response'
        });
    }

    getTradeMarks(): Observable<HttpResponse<TradeMark[]>> {
        return this.httpClient.get<TradeMark[]>(this.restAPI.getTradeMarkUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }

    getProductTypes(): Observable<HttpResponse<ProductType[]>> {
        return this.httpClient.get<ProductType[]>(this.restAPI.getProductTypeUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }

    getAges(): Observable<HttpResponse<Age[]>> {
        return this.httpClient.get<Age[]>(this.restAPI.getProductTypeUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }

    getWeight():Observable<HttpResponse<Weight[]>> {
        return this.httpClient.get<Weight[]>(this.restAPI.getProductTypeUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }

    getWarehouse():Observable<HttpResponse<Warehouse[]>> {
        return this.httpClient.get<Warehouse[]>(this.restAPI.getWarehouseUrl, { headers: this.requestHeader.httpHeader, observe: 'response' });
    }
}

