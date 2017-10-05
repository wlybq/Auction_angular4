import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../Objectes/Product";
import {ProductService} from "../services/product.service";
import {ProductComment} from "../Objectes/ProductComment";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;
  public comments: ProductComment[];

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const id = this.routeInfo.snapshot.params['id'];
    this.product = this.productService.getProduct(id);
    this.comments = this.productService.getCommentForProduct(id);
  }

}
