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
import { AccountService } from './components/admin/management-page/account/account-creation/account.service';
import { AccountCreationService } from './components/admin/management-page/account/account-creation/account-creation.service';
import { UserService } from './services/users.service';
import { RestAPI } from './services/rest-api';
import { ProductService } from './services/product/product.service';
import { ProductStore } from './components/admin/management-page/product-page/pruduct-store/product-store';
import { EditProductDialog } from './components/admin/management-page/product-page/product-dialog/edit-product-dialog/edit-product';
import { StoreProductDialog } from './components/admin/management-page/product-page/product-dialog/store-product-dialog/store-product';
import { ProductDetailDialog } from './components/admin/management-page/product-page/product-dialog/product-detail-dialog/product-detail-dialog';
import { CookieService } from 'ngx-cookie-service';
import { ShoppingCartDialog } from './components/admin/management-page/product-page/product-dialog/shopping-cart/shopping-cart';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaymentComponent } from './components/admin/management-page/product-page/payment/payment';
import { DeleteProductComponent } from './components/admin/management-page/product-page/delete-product/delete-product.component';
import { OrderDialogComponent } from './components/admin/management-page/product-page/product-dialog/order-dialog/order-dialog.component';
import { OrderWaitingComponent } from './components/admin/management-page/order-page/order-waiting/order-waiting.component';
import { OrderApprovedComponent } from './components/admin/management-page/order-page/order-approved/order-approved.component';
import { OrderCompletedComponent } from './components/admin/management-page/order-page/order-completed/order-completed.component';
import { OrderPageComponent } from './components/admin/management-page/order-page/order-page/order-page.component';
import { WaitingingOrderDialog } from './components/admin/management-page/order-page/order-dialog/waiting-order-dialog/waiting-order-dialog.component';
import { TrademarkComponent } from './components/admin/management-page/trademark/trademark.component';
import { ApprovedOrderDialogComponent } from './components/admin/management-page/order-page/order-dialog/approved-order-dialog/approved-order-dialog.component';

const appRoutes: Routes = [
    //user with manager or employee role view
    {
        path: 'admin-page', component: AdminPageComponent, outlet: 'home', children: [
            { path: 'account', component: AccountPage, outlet: 'admin' },
            { path: 'product', component: ManageProductComponent, outlet: 'admin' },
            { path: 'approved-order', component: OrderApprovedComponent, outlet: 'admin' },
            { path: 'waiting-order', component: OrderWaitingComponent, outlet: 'admin' },
            { path: 'trademark', component: TrademarkComponent, outlet: 'admin'}
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
        ProductStore,
        EditProductDialog,
        StoreProductDialog,
        ProductDetailDialog,
        ShoppingCartDialog,
        PaymentComponent,
        DeleteProductComponent,
        OrderDialogComponent,
        OrderWaitingComponent,
        OrderApprovedComponent,
        OrderCompletedComponent,
        OrderPageComponent, 
        WaitingingOrderDialog, TrademarkComponent, ApprovedOrderDialogComponent
    ],

    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes, { enableTracing: true }
        ),
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule, ReactiveFormsModule,
        NgxPayPalModule
    ],
    entryComponents: [ApprovedOrderDialogComponent,WaitingingOrderDialog, OrderDialogComponent, EditProductDialog, StoreProductDialog, ProductDetailDialog, ShoppingCartDialog, PaymentComponent, DeleteProductComponent],
    providers: [_RequestHeader, RoleService, FormBuilder, AccountService, AccountCreationPage, UserService, ProductService, RestAPI, CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }