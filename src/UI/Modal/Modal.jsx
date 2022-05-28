import { useState } from "react";
import "./Modal.css";
const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Edit Task Title</h2>
        {props.children}
        <button className="cancel-btn" onClick={props.onCancelHandler}>
          cancel
        </button>
        <button className="submit-btn" onClick={props.onSubmitHandler}>
          submit
        </button>
      </div>
    </div>
  );
};
export default Modal;
