import { Injectable } from "@angular/core";
import { _RequestHeader } from "../../../../../services/header";
import { Role } from "../../../../interface/interface";
import { HttpResponse, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AccountService {
    constructor(private httpClient: HttpClient, private requestHeader: _RequestHeader) { }
    checkAccountUrl = "http://localhost:8888/user/validate";
    saveUserUrl = "http://localhost:8888/user/saveuser";
    checkAccount(username: string): Observable<HttpResponse<any>> {
        const url = `${this.checkAccountUrl}/${username}`;
        return this.httpClient.get<any>(url, { headers: this.requestHeader.httpHeader(), observe: 'response' });
    }
    saveUser(userProfile: Object): Observable<HttpResponse<Object>> {
        return this.httpClient.post<Object>(this.saveUserUrl, userProfile, {
            headers: this.requestHeader.httpHeader(), observe: 'response'
        });
    }
}