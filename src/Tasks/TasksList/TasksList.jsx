import { useContext, memo } from "react";
import { TasksContext } from "../../context/Todo-context";
import TaskItem from "./TaskItem/TaskItem";
const TaskList = (props) => {
  const taskCTX = useContext(TasksContext);
  let tasks_filter;
  if (props.taskTarget === "All") {
    tasks_filter = taskCTX.tasks;
  } else if (props.taskTarget === "Compelete") {
    tasks_filter = taskCTX.tasks.filter((item) => {
      return item.isCompeleted === true;
    });
  } else if (props.taskTarget === "UnCompelete") {
    tasks_filter = taskCTX.tasks.filter((item) => {
      return item.isCompeleted === false;
    });
  }
  return (
    <>
      {tasks_filter.map((item) => {
        return (
          <TaskItem
            name={item.name}
            date={item.date}
            key={item.id}
            id={item.id}
            isCompeleted={item.isCompeleted}
            editState={item.editState}
          />
        );
      })}
    </>
  );
};
export default memo(TaskList);
