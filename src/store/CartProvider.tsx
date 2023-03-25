import { ReactNode, FC, useReducer } from "react";
import { act } from "react-dom/test-utils";

import CartContext, { IContextItem, IContextItems } from "./card-context";

type ICartProviderProps = {
  children: ReactNode;
};

// type ICartReducerItemState = {
//   items: IContextItem | [];
//   totalAmount: number;
// };

const defaultCartState: IContextItems = {
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: (id) => {},
};

type IAction = {
  type: string;
  payload: IContextItem;
};

const cartReducer = (state: IContextItems, action: IAction) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.payload);
    const updatedTotalAmount =
      state.totalAmount + action.payload.amount * action.payload.price;

    const newState: IContextItems = {
      ...state,
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };

    return newState;
  }
  return defaultCartState;
};

const CartProvider: FC<ICartProviderProps> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item: IContextItem) => {
    dispatchCartAction({ type: "ADD", payload: item });
  };
  const removeItemToCartHandler = (id: string) => {
    // dispatchCartAction({ type: "REMOVE", payload: id });
  };

  const cart: IContextItems = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export default CartProvider;
