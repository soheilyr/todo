import { useContext, useState } from "react";
import { TasksContext } from "../../context/Todo-context";
import Modal from "../../UI/Modal/Modal";
const EditTaskForm = (props) => {
  const taskCTX = useContext(TasksContext);
  const [inputValue, setInputValue] = useState("");
  const editValueHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitHandler = () => {
    taskCTX.EditTasksHandler(props.taskId, inputValue);
    taskCTX.setEditState(props.taskId, false);
  };
  const onCancelHandler = () => {
    taskCTX.setEditState(props.taskId, false);
  };
  return (
    <Modal onSubmitHandler={submitHandler} onCancelHandler={onCancelHandler}>
      <form action="">
        <input
          type="text"
          placeholder={props.taskName}
          onChange={editValueHandler}
        />
      </form>
    </Modal>
  );
};
export default EditTaskForm;
