import {
  FC,
  FormEvent,
  ReactNode,
  useRef,
  MutableRefObject,
  useState,
} from "react";
// import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

type IMealItemForm = {
  onAddToCart: (amount: number) => void;
  children?: ReactNode;
};

const MealItemForm: FC<IMealItemForm> = ({ onAddToCart }) => {
  const amountInputRef: MutableRefObject<any> = useRef<HTMLInputElement>();
  const [isValid, setIsValid] = useState<boolean>(false);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enterAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enterAmountNumber < 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    onAddToCart(enterAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
        ref={amountInputRef}
      />
      <button>+Add</button>
      {!isValid && <p>Please enter a valid amount</p>}
    </form>
  );
};
export default MealItemForm;
