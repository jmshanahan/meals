import { FC } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
type IMealItemProps = {
  name: string;
  description: string;
  price: number;
  id: string;
};

const MealItem: FC<IMealItemProps> = ({ id, name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
