export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  deliveryTime: string;
  imageUrl: string;
}

export interface OrderData {
  name: string;
  phone: string;
  telegram: string;
  product: Product;
}
