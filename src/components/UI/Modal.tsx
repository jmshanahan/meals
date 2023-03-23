import { FC, ReactNode, Fragment } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

type IBackdropProps = {
  onClose: () => void;
};

const Backdrop: FC<IBackdropProps> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

type IModalOverlayProps = {
  children: ReactNode;
};
const ModalOverlay: FC<IModalOverlayProps> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

type IModal = {
  children: ReactNode;
  onClose: () => void;
};

const Modal: FC<IModal> = ({ children, onClose }) => {
  const modalContainer: HTMLElement = document.getElementById("overlays")!;
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={onClose} />, modalContainer)}

      {createPortal(<ModalOverlay>{children}</ModalOverlay>, modalContainer)}
    </Fragment>
  );
};
export default Modal;
