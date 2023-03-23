import { createContext } from "react";
export type IContextItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
};

export type IContextItems = {
  items: IContextItem[];
  totalAmount: number;
  addItem: (item: IContextItem) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<IContextItems | null>(null);

export default CartContext;
