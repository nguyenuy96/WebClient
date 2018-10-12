import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.css']
})

export class HomePage {
    value="";
    user: any;
    constructor(private route:ActivatedRoute){

    }
    ngOnInit(){
        this.user = sessionStorage.getItem('user');
    }
}