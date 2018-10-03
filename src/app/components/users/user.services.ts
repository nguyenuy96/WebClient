import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface User {
    username: string;
    password: string;
}
const httpHeader = new HttpHeaders({
    'Content-Type': 'application/json'
})
@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) { }
    loginUrl = "http://localhost:8888/account/login";
    login(user: User): Observable<HttpResponse<User>> {
        return this.httpClient.post<User>(this.loginUrl, user, {
            headers: httpHeader, observe: 'response'
        });
    }
}