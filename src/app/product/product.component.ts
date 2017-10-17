import { Component, OnInit } from '@angular/core';
import {Product} from "../Objectes/Product";
import {ProductService} from "../services/product.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];
  public searchText: FormControl = new FormControl();
  public keword: string;
  public imgUrl = 'http://placehold.it/320x150'

  constructor(private productService: ProductService) {
    this.searchText.valueChanges
    .debounceTime(500)
    .subscribe(val => this.keword = val);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
