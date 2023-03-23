import { ReactNode, FC } from "react";

import CartContext, { IContextItem, IContextItems } from "./card-context";

type ICartProviderProps = {
  children: ReactNode;
};

const CartProvider: FC<ICartProviderProps> = ({ children }) => {
  const addItemToCartHandler = (item: IContextItem) => {};
  const removeItemToCartHandler = (id: string) => {};

  const cartItem: IContextItem = {
    id: "abc",
    name: "joskep",
    description: "joedescription",
    price: 45,
    amount: 1,
  };

  const cart: IContextItems = {
    items: [cartItem],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export default CartProvider;
