import Card from "../../../UI/card";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { TasksContext } from "../../../context/Todo-context";
import { useContext, useState } from "react";
import "./TaskItem.css";
import EditTaskForm from "../../EditTaskForm/EditTaskForm";
const TaskItem = (props) => {
  const taskCTX = useContext(TasksContext);

  const showModalHandler = () => {
    taskCTX.setEditState(props.id, true);
  };
  const isCompeleted = props.isCompeleted ? "done" : "";

  return (
    <Card className={`${isCompeleted}`}>
      <div className="d-flex">
        <h3>{props.name}</h3>

        <div className="icon-container">
          <IconButton
            aria-label="done"
            onClick={() => taskCTX.DoneTasksHandler(props.id)}
          >
            <DoneIcon />
          </IconButton>
          <IconButton aria-label="edit" onClick={showModalHandler}>
            <Edit />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => taskCTX.RemoveTasksHandler(props.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <span>Date added: {props.date}</span>
      {props.editState && (
        <EditTaskForm taskId={props.id} taskName={props.name} />
      )}
    </Card>
  );
};
export default TaskItem;
