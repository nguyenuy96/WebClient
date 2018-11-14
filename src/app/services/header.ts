import { HttpHeaders } from "@angular/common/http";

export class _RequestHeader{
    httpHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': sessionStorage.token,
    })


    imageHeader = new HttpHeaders({
        'Authorization': sessionStorage.token
    })
}