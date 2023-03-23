import React, { FC, useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/card-context";
type IHeaderCartButton = {
  onClick: () => void;
};

const HeaderCartButton: FC<IHeaderCartButton> = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  let numberOfCartItems: number = 0;
  if (cartCtx && cartCtx.items.length > 0) {
    numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
      return currentNumber + item.amount;
    }, 0);
  }

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
