import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import { render } from "react-dom";


const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {render(<Backdrop onClose={props.onClose}/>, portalElement)}
      {render(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
