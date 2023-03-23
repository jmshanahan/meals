import { FC, ReactNode } from "react";
import classes from "./Card.module.css";
type ICardProps = {
  children: ReactNode;
};

const Card: FC<ICardProps> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
