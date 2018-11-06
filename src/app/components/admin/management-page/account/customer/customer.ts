import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { Customer } from "../../../../interface/interface";
import { UserService } from "../../../../../services/users.service";

@Component({
    selector: 'customer-page',
    templateUrl: './customer.html',
    styleUrls: ['./customer.css'],
})

export class CustomerPage {
    constructor(private userService: UserService){}
    displayedColumns: string[] = ['customerId', 'name', 'phoneNumber', 'address'];
    dataSource:any;
    selection: any;
    customers: Customer[];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    ngOnInit() {
        this.userService.listCustomer().subscribe(
            resp => {
                this.customers = resp.body;
                this.dataSource = new MatTableDataSource<Customer>(this.customers);
                this.selection = new SelectionModel<Customer>(true, []);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        )
    }
}