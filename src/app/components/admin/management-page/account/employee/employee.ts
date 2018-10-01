import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
export interface Employees {
    position: number;
    phonenumber: string;
    name: string;
    gender: string;
    nationality: string;
    identificate: string;
    address: string;
}
const ELEMENT_DATA: Employees[] = [
    { position: 1, phonenumber: '0964474561', name: 'Nguyễn Hữu Úy', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 2, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 3, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 4, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 5, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 6, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 7, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 8, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 9, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 10, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 11, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 12, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 13, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 14, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 15, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 16, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 17, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 18, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 19, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 20, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 21, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 22, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 23, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 24, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 25, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 26, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 27, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 28, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 29, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 30, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 31, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 32, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 33, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 34, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 35, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 36, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 37, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 38, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 39, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
    { position: 40, phonenumber: '0964474561', name: 'Hydrogen', gender: 'Nam', nationality: 'Việt Nam', identificate: '371705684', address: 'Tân Hiệp, Kiên Giang' },
];
@Component({
    selector: 'employee-page',
    templateUrl: './employee.html',
    styleUrls: ['./employee.css']
})

export class EmployeePage {
    displayedColumns: string[] = ['position', 'phonenumber', 'name', 'gender', 'nationality', 'identificate', 'address'];
    dataSource = new MatTableDataSource<Employees>(ELEMENT_DATA);
    selection = new SelectionModel<Employees>(true, []);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}