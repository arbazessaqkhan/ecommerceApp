// types/Product.ts
export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity?: number; // optional: used for cart items
};
