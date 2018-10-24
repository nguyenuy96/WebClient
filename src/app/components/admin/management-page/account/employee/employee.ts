import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { UserService } from "../../../../../services/users.service";
import { Employee } from "../../../../interface/interface";

@Component({
    selector: 'employee-page',
    templateUrl: './employee.html',
    styleUrls: ['./employee.css'],
})

export class EmployeePage {
    constructor(private userService: UserService) { }
    displayedColumns: string[] = ['emplId', 'phoneNumber', 'name', 'gender', 'nationality', 'identification', 'address'];
    selection: any;
    dataSource: any;
    employees: Employee[];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    ngOnInit() {
        this.userService.listEmployee().subscribe(
            resp => {
                this.employees = resp.body;
                this.dataSource = new MatTableDataSource<Employee>(this.employees);
                this.selection = new SelectionModel<Employee>(true, []);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        )
    }
}