import {Product} from "../Objectes/Product";
import {ProductComment} from "../Objectes/ProductComment";

const Data: Product[] = [
  new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
  new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
  new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
  new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
  new Product(5, '第五个商品', 5.99, 3.5, '这是第五个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
  new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备'])
];

const Comments = [
  new ProductComment(1, 1, 'csw', '2017/09/30', 4, '东西挺好的'),
  new ProductComment(2, 1, 'lx', '2017/02/06', 3, '东西一般'),
  new ProductComment(3, 2, 'ww', '2017/08/12', 1, '差评'),
  new ProductComment(4, 1, 'mayun', '2017/08/24', 5, '好东西'),
  new ProductComment(5, 3, 'mahuateng', '2017/05/10', 4, '还不错'),
  new ProductComment(6, 1, 'wl', '2017/09/11', 2, '真的一般'),
  new ProductComment(7, 5, 'zhy', '2017/02/05', 5, '给好评！'),
  new ProductComment(8, 4, 'fj', '2017/07/04', 1, '垃圾东西'),
  new ProductComment(9, 5, 'jj', '2017/11/11', 3, '给三分吧')
];

export { Data, Comments };

