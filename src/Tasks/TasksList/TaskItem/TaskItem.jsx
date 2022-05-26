import Card from "../../../UI/card";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton } from "@mui/material";
import { TasksContext } from "../../../context/Todo-context";
import { useContext } from "react";
import "./TaskItem.css";
const TaskItem = (props) => {
  const taskCTX = useContext(TasksContext);
  // console.log(taskCTX);
  // console.log("props.id =>", props.id);
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
          <IconButton
            aria-label="delete"
            onClick={() => taskCTX.RemoveTasksHandler(props.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <span>Date added: {props.date}</span>
    </Card>
  );
};
export default TaskItem;
