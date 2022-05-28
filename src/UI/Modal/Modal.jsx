import { useState } from "react";
import "./Modal.css";
const Modal = (props) => {
  return (
    <div className="modal">
      <h3>Edit Task Title</h3>
      {props.children}
      <button onClick={props.onCancelHandler}>cancel</button>
      <button onClick={props.onSubmitHandler}>submit</button>
    </div>
  );
};
export default Modal;
