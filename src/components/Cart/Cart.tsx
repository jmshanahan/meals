import { FC, useContext } from "react";
import CartContext from "../../store/card-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import { IContextItem } from "../../store/card-context";
import classes from "./Cart.module.css";
type ICartProps = {
  onClose: () => void;
};
// type IContextItemWithAddRemove = IContextItem & {
//   onAdd: (item: IContextItem) => void;
//   onRemove: (id: string) => void;
// };

const Cart: FC<ICartProps> = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx && cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx?.removeItem(id);
  };
  const cartItemAddHandler = (item: IContextItem) => {
    cartCtx?.addItem(item);
  };

  const totalAmount = `$${cartCtx!.totalAmount.toFixed(2)}`;
  const cartItems = (
    <ul className={classes["cart-item"]}>
      {cartCtx!.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
