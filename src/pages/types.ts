export interface ProductOb {
  id: number;
  name: string;
  price: number;
  provider: string;
  image: string;
}

export interface ProductDetailOb extends ProductOb {
  quantity: number;
}
