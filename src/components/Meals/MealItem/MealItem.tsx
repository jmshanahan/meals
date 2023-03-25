import { FC, useContext } from "react";
import CartContext, { IContextItem } from "../../../store/card-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import Cart from "../../Cart/Cart";
type IMealItemProps = {
  name: string;
  description: string;
  price: number;
  id: string;
};

const MealItem: FC<IMealItemProps> = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;
  const addItemToCartHandler = (amount: number) => {
    const newItem: IContextItem = {
      id,
      name,
      amount,
      price,
    };
    if (cartCtx) {
      cartCtx.addItem(newItem);
    }
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
