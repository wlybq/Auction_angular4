import { Injectable } from '@angular/core';
import {Product} from "../Objectes/Product";
import {Data, Comments} from "../datas/data";
import {ProductComment} from "../Objectes/ProductComment";
import {log} from "util";

@Injectable()
export class ProductService {

  public Products: Product[];
  public Comments: ProductComment[];

  constructor() {
    this.Products = Data;
    this.Comments = Comments;
  }

  getProduct(id): Product {
    return this.Products.find((product: Product) => product.id == id);
  }

  getProducts(): Product[] {
    return this.Products;
  }

  getCommentForProduct(id): ProductComment[] {
    return this.Comments.filter((comment: ProductComment) => comment.productID == id);
  }
}
