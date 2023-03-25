import React, { FC, useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/card-context";
import { IContextItem } from "../../store/card-context";
import { setTimeout } from "timers/promises";
type IHeaderCartButton = {
  onClick: () => void;
};

const HeaderCartButton: FC<IHeaderCartButton> = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx!;
  const [buttonIsHighlighted, setButtonIsHighlighted] =
    useState<boolean>(false);
  let numberOfCartItems = 0;
  if (cartCtx && cartCtx.items.length > 0) {
    numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
      return currentNumber + item.amount;
    }, 0);
  } else {
    console.log("No cart items");
  }
  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx?.items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = window.setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => {
      window.clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
