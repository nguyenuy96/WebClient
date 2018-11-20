import { HttpHeaders } from "@angular/common/http";
import { Product } from "../components/interface/interface";
import { Injectable, Component } from "@angular/core";

@Component({})
export class _RequestHeader {

    // httpHeader = new HttpHeaders({
    //     'Content-Type': 'application/json'
    // })

    imageHeader(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': sessionStorage.token
        })
    }
    //     'Authorization': ''
    // })

    httpHeader(): HttpHeaders {
        let token = sessionStorage.token;
        if (token === undefined)
            return new HttpHeaders({
                'Content-Type': 'application/json'
            })
        else
            return new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
    }
}