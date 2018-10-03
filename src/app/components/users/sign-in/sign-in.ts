import { Component } from "@angular/core";
import { UserService } from "../user.services";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.html',
    styleUrls: ['./sign-in.css'],
    providers: [UserService]
})
export class SignInComponent {
    constructor(private route: ActivatedRoute,
        private userService: UserService, private router: Router
    ){}
    user: any;
    subscription: Subscription;
    login(username: string, password: string) {
        this.user = {username: username, password: password};
        this.userService.login(this.user).subscribe(
            response => {
                console.log(response.headers.get('authorization'));
            },
            (err: HttpErrorResponse) => {
                alert(err.status);
            }
        )

    }
}