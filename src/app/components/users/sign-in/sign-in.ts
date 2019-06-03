import { Component } from "@angular/core";
import { UserService } from "../user.services";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { HomePage } from "../../home-page/home-page";

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.html',
    styleUrls: ['./sign-in.css'],
    providers: [UserService]
})
export class SignInComponent {
    constructor(private route: ActivatedRoute,
        private userService: UserService, private router: Router, private homePage: HomePage
    ) { }
    user: any;
    subscription: Subscription;
    login(username: string, password: string) {
        this.user = { username: username, password: password };
        this.userService.login(this.user).subscribe(
            response => {
                sessionStorage.setItem('token', response.headers.get('authorization'));
                this.detail(username);
            },
            (err: HttpErrorResponse) => {
                alert("Tài khoản hoặc mật khẩu sai!");
            }
        )
    }
    detail(username: string) {
        this.user = { username: username };
        this.userService.detail(this.user).subscribe(
            response => {
                this.user = response.body;
                var account = JSON.stringify(this.user);
                sessionStorage.setItem('user', account);
                this.homePage.ngOnInit();
                if (this.user.role.roleName == "Customer") {
                    this.router.navigate([{ outlets: { home: ['store-page'] } }]);
                } else {
                    this.router.navigate([{ outlets: { home: ['admin-page'] } }]);
                }
            },
            (err: HttpErrorResponse) => {
                console.log("asdasdsd");
            }
        )
    }
}