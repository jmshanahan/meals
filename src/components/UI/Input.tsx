import { FC } from "react";
import classes from "./Input.module.css";

type IInputProps = {
  label: string;
  input: {
    id: string;
    type: string;
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: string;
  };
  // ref:MutableRefObject<HTMLInputElement>
};

const Input: FC<IInputProps> = ({ label, input }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
};

export default Input;
