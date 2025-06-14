
export interface Product {
  id: string;
  nameKey: string;
  descriptionKey: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
