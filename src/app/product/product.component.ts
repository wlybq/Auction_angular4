import { Component, OnInit } from '@angular/core';
import {Product} from "../Objectes/Product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];

  private imgUrl = 'http://placehold.it/320x150'

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
