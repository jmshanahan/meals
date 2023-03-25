import { ReactNode, FC, useReducer } from "react";

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
    const updatedTotalAmount =
      state.totalAmount + action.payload.amount * action.payload.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem = { ...action.payload };
      updatedItems = state.items.concat(updatedItem);
    }

    const newState: IContextItems = {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };

    return newState;
  }
  if (action.type === "REMOVE") {
    let updatedItems: IContextItem[];

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
    } else {
      const updatedItem: IContextItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    const newState: IContextItems = {
      ...state,
      items: updatedItems,
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
    // Add dummy so as not to break the interface.
    const dummy = "DUMMY";
    const dummyItemWithValidId: IContextItem = {
      id,
      name: dummy,
      price: 0,
      amount: 0,
    };
    dispatchCartAction({ type: "REMOVE", payload: dummyItemWithValidId });
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
