import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpResponse, HttpClient } from "@angular/common/http";
import { Role } from "../components/interface/interface";
import { _RequestHeader } from "./header";

@Injectable()
export class RoleService{
    constructor(private httpClient: HttpClient, private requestHeader: _RequestHeader) { }
    listRoleUrl = "http://localhost:8888/user/list-role";
    listRoles(): Observable<HttpResponse<Role[]>> {
        return this.httpClient.get<Role[]>(this.listRoleUrl, {headers: this.requestHeader.httpHeader(), observe:'response'});
    }
}