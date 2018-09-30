import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/users/sign-in/sign-in';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/materials/component.materials';
import { AdminPageComponent } from './components/admin/admin-page/admin-page';
import { ManageProductComponent } from './components/admin/management-page/product-page/manage-product/manage-product';
import { AddProductComponent } from './components/admin/management-page/product-page/add-product/add-product';
import { AccountPage } from './components/admin/management-page/account/account-page';
import { CustomerPage } from './components/admin/management-page/account/customer/customer';
import { EmployeePage } from './components/admin/management-page/account/employee/employee';
import { AccountCreationPage } from './components/admin/management-page/account/account-creation/account-creation';
const appRoutes: Routes = [
    { path: 'sign-in', component: SignInComponent },
    { path: 'admin', component: AdminPageComponent },
    { path: 'product', component: ManageProductComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'account', component: AccountPage },
    { path: 'customer', component: CustomerPage },
    { path: 'employee', component: EmployeePage },
    { path: 'account-creation', component: AccountCreationPage}
];

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        AdminPageComponent,
        ManageProductComponent,
        AddProductComponent,
        AccountPage,
        CustomerPage,
        EmployeePage,
        AccountCreationPage
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes, { enableTracing: true }
        ),
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }