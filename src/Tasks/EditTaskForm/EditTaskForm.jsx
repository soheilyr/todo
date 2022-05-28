import { useContext, useState } from "react";
import { TasksContext } from "../../context/Todo-context";
import Modal from "../../UI/Modal/Modal";
import styles from "./EditTaskForm.module.css";
const EditTaskForm = (props) => {
  const [error, setError] = useState(false);
  const taskCTX = useContext(TasksContext);
  const [inputValue, setInputValue] = useState("");
  const editValueHandler = (e) => {
    setInputValue(e.target.value);
    setError(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue.trim() == "") {
      taskCTX.EditTasksHandler(props.taskId, inputValue);
      taskCTX.setEditState(props.taskId, false);
    } else {
      setError(true);
    }
  };
  const onCancelHandler = () => {
    taskCTX.setEditState(props.taskId, false);
  };
  return (
    <Modal onSubmitHandler={submitHandler} onCancelHandler={onCancelHandler}>
      <form onSubmit={submitHandler} action="">
        <input
          className={styles.editInput}
          type="text"
          placeholder={props.taskName}
          onChange={editValueHandler}
        />
        {error && <p className={styles.errorMsg}>Empty value</p>}
      </form>
    </Modal>
  );
};
export default EditTaskForm;
