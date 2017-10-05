export class ProductComment {

  constructor(
    public id: number,
    public productID: number,
    public username: string,
    public time: string,
    public star: number,
    public text: string
  ) {

  }

}
