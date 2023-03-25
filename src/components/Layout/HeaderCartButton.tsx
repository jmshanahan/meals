import React, { FC, useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/card-context";
import { IContextItem } from "../../store/card-context";
type IHeaderCartButton = {
  onClick: () => void;
};

const HeaderCartButton: FC<IHeaderCartButton> = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  let numberOfCartItems = 0;
  if (cartCtx && cartCtx.items.length > 0) {
    console.log(`No of cart items ${cartCtx.items.length}`);

    // numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    //     return currentNumber + item.amount;
    //   },
    //   0
    // );
  } else {
    console.log("No cart items");
  }

  const myarray = [1, 2, 3, 4].reduce((item, currentValue) => {
    return currentValue + item;
  });
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
