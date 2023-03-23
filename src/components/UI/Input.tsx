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
};

const Input: FC<IInputProps> = ({ label, input }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
