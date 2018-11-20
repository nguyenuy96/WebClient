import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { _RequestHeader } from "./header";
import { Observable } from "rxjs";
import { Employee, Customer } from "../components/interface/interface";

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient, private requestHeader: _RequestHeader) { }
    employeeUrl = "http://localhost:8888/user/list-employee";
    customerUrl = "http://localhost:8888/user/list-customer";
    listEmployee(): Observable<HttpResponse<Employee[]>> {
        return this.httpClient.get<Employee[]>(this.employeeUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }
    listCustomer(): Observable<HttpResponse<Customer[]>> {
        return this.httpClient.get<Customer[]>(this.customerUrl, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }
}