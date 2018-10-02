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
import { StoreViewPage } from './components/store-view/store-view';
import { FormsModule } from '@angular/forms';
import { ProductCatergory } from './components/store-view/category/category';
const appRoutes: Routes = [
    //Management Page
    { path: 'sign-in', component: SignInComponent },
    { path: 'admin', component: AdminPageComponent },
    { path: 'product', component: ManageProductComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'account', component: AccountPage },
    { path: 'customer', component: CustomerPage },
    { path: 'employee', component: EmployeePage },
    { path: 'employee-profile', component: EmployeeProfilePage },
    { path: 'account-profile', component: AccountProfilePage },
    { path: 'customer-profile', component: CustomerProfilePage },
    { path: 'account-createion', component: AccountCreationPage },
    { path: 'account-role', component: AccountRolePage },
    //Store View Page
    { path: 'store-view', component: StoreViewPage },

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
        StoreViewPage,
        ProductCatergory
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes, { enableTracing: true }
        ),
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }