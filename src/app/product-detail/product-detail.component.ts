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
  public newRating: number = 0;
  public commentText: string;
  public showItem: boolean = false;
  private id: number;

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) {
    this.id = this.routeInfo.snapshot.params['id'];
  }

  ngOnInit() {
    this.product = this.productService.getProduct(this.id);
    this.comments = this.productService.getCommentForProduct(this.id);
  }

  addComment(): void {
    let aNewComment = new ProductComment(
      this.comments[this.comments.length - 1].id + 1, // 评论ID
      this.id, // 商品id
      'someone', // 发布人
      new Date().toLocaleDateString(), // 时间
      this.newRating, // 评星
      this.commentText // 评语
    );
    this.comments.unshift(aNewComment);
    this.newRating = 0;
    this.commentText = '';
    let sum = this.comments.reduce((s, c) => s + c.star, 0);
    this.product.rating = sum / this.comments.length;
  }
}
