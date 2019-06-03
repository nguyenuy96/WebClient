import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Country, ProductType, TradeMark } from 'src/app/components/interface/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-trademark',
  templateUrl: './trademark.component.html',
  styleUrls: ['./trademark.component.css']
})
export class TrademarkComponent implements OnInit {

  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }
  displayedColumns: string[] = ['countryId', 'countryName'];
  displayedColumns1: string[] = ['tradeMarkId', 'tradeMark', 'country'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatSort) sort1: MatSort;
  dataSource: any;
  selection: any;

  dataSource1: any;
  selection1: any;
  countries: Country[];
  trademarks: TradeMark[]
  formGroup: FormGroup;
  ngOnInit() {
    this.initFromGroup();
    this.getCountry();
    this.getProductType();
  }

  initFromGroup() {
    this.formGroup = this.formBuilder.group({
      country: this.formBuilder.group({
        countryName: ['']
      }),
      trademark: this.formBuilder.group({
        trademark: ['']
      })
    })
  }
  getCountry() {
    this.productService.getCountry().subscribe(
      resp => {
        this.countries = resp.body;
        this.dataSource = new MatTableDataSource<Country>(this.countries);
        this.selection = new SelectionModel<Country>(true, []);
        this.dataSource.paginator = this.paginator;
        this.paginator._intl.itemsPerPageLabel = "Số quốc gia/trang";
        this.dataSource.sort = this.sort;
      }
    )
  }

  saveCountry() {
    let country = { countryName: this.formGroup.value.country.countryName }
    this.productService.saveCountry(country).subscribe(resp => {
      this.ngOnInit();
    },
      (errMsg: HttpErrorResponse) => {
        if (errMsg.status == 400) {
          alert("Tên quốc gia không thể bỏ trống")
        } else {
          alert("Quốc gia bị trùng")
        }
      })
  }

  getProductType() {
    this.productService.listTradeMarks().subscribe(
      resp => {
        this.trademarks = resp.body;
        this.dataSource1 = new MatTableDataSource<TradeMark>(this.trademarks);
        this.selection1 = new SelectionModel<TradeMark>(true, []);
        this.dataSource1.paginator = this.paginator1;
        this.paginator1._intl.itemsPerPageLabel = "Số loại/trang";
        this.dataSource1.sort = this.sort1;
      }
    )
  }

  saveTradeMark() {
    let tradeMark = { tradeMark: this.formGroup.value.trademark.trademark }
    this.productService.saveTradeMark(tradeMark).subscribe(

    ),
      (errMsg: HttpErrorResponse) => {
        alert("Tên loại hàng không thể bỏ trống hoặc đã có")
      }
  }
}
