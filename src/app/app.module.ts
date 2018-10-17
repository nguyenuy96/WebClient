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
import { AccountProfilePage } from './components/admin/management-page/account/account-creation/account-profile/account-profile';
import { EmployeeProfilePage } from './components/admin/management-page/account/account-creation/personal-profile/employee-profile/employee-profile';
import { CustomerProfilePage } from './components/admin/management-page/account/account-creation/personal-profile/customer-profile/customer-profile';
import { AccountCreationPage } from './components/admin/management-page/account/account-creation/account-creation';
import { AccountRolePage } from './components/admin/management-page/account/account-creation/account-role/account-role';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './components/home-page/home-page';
import { StorePage } from './components/store-view/store-page';
import { ProductCategoryDetail } from './components/store-view/category-detail/category-detail';
import { ProductCatergory } from './components/store-view/category/category';
import { _RequestHeader } from './services/header';
import { RoleService } from './services/role.service';
const appRoutes: Routes = [
    //user with manager or employee role view
    {
        path: 'admin-page', component: AdminPageComponent, outlet: 'home', children: [
            { path: 'account', component: AccountPage, outlet: 'admin' },
            { path: 'product', component: ManageProductComponent, outlet: 'admin' },
        ]
    },

    {
        path: 'product-detail', component: ProductCategoryDetail
    },
    //customer view
    { path: 'store-page', component: StorePage, outlet: 'home' },
    { path: 'add-product', component: AddProductComponent },

    { path: 'customer', component: CustomerPage },
    { path: 'employee', component: EmployeePage },
    { path: 'employee-profile', component: EmployeeProfilePage },
    { path: 'account-profile', component: AccountProfilePage },
    { path: 'customer-profile', component: CustomerProfilePage },
    { path: 'account-createion', component: AccountCreationPage },
    { path: 'account-role', component: AccountRolePage },
    //Store View Page
    //Home-page
    { path: 'home-page', component: HomePage },
    { path: 'login', component: SignInComponent, outlet: 'home' },
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
        AccountCreationPage,
        EmployeeProfilePage,
        AccountProfilePage,
        CustomerProfilePage,
        AccountRolePage,
        StorePage,
        ProductCatergory,
        ProductCategoryDetail,
        HomePage,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes, { enableTracing: true }
        ),
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule, ReactiveFormsModule
    ],
    providers: [_RequestHeader, RoleService, FormBuilder],
    bootstrap: [AppComponent]
})
export class AppModule { }