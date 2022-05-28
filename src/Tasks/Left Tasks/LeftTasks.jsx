import { useContext } from "react";
import { TasksContext } from "../../context/Todo-context";
import { Badge } from "@mui/material";
import "./LeftTasks.css";
const LeftTasks = () => {
  const taskCTX = useContext(TasksContext);
  const TasksLeft = () => {
    const LeftTasks = taskCTX.tasks.filter(
      (item) => item.isCompeleted === false
    );
    return LeftTasks.length;
  };
  console.log(TasksLeft());
  return (
    <div className="leftTasksContainer">
      <Badge badgeContent={TasksLeft()} showZero color="secondary" />
      <span>Tasks Left</span>
    </div>
  );
};
export default LeftTasks;
