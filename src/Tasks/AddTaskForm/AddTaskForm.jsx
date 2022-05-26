import { useContext, useState } from "react";
import { TasksContext } from "../../context/Todo-context";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import styles from "./AddTaskForm.module.css";
const AddTaskForm = () => {
  const taskCTX = useContext(TasksContext);
  const [error, setError] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const setTaskValueHandler = (e) => {
    setTaskValue(e.target.value);
    setError(false);
  };
  const addTaskHandler = (e) => {
    e.preventDefault();
    if (taskValue.trim() !== "") {
      taskCTX.AddTasksHandler(taskValue);
      setTaskValue("");
    } else {
      setError(true);
    }
  };
  return (
    <>
      <form onSubmit={addTaskHandler} action="" className={styles.form}>
        <TextField
          id="standard-basic"
          label="Task"
          variant="standard"
          onChange={setTaskValueHandler}
          value={taskValue}
        />
        <Button
          className={styles.submitButton}
          type="submit"
          variant="outlined"
          color="success"
        >
          Add
        </Button>
        {error && <p>the Task input is Empty</p>}
      </form>
    </>
  );
};
export default AddTaskForm;
