import React, { FC, Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import CartIcon from "../Cart/CartIcon";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
type IHeaderProps = {
  onShowCart: () => void;
};
const Header: FC<IHeaderProps> = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Big meal" />
      </div>
    </Fragment>
  );
};

export default Header;
