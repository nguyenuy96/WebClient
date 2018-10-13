import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Account } from "../interface/interface";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.css']
})

export class HomePage {
    value = "";
    account: any;
    ngOnInit() {
        if(sessionStorage.length > 0)
        this.account = JSON.parse(sessionStorage.user);
    }
}