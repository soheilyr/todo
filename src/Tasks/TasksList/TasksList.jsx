import { useContext, memo } from "react";
import { TasksContext } from "../../context/Todo-context";
import TaskItem from "./TaskItem/TaskItem";
const TaskList = () => {
  const taskCTX = useContext(TasksContext);
  return (
    <>
      {taskCTX.tasks.map((item) => {
        return (
          <TaskItem
            name={item.name}
            date={item.date}
            key={item.id}
            id={item.id}
            isCompeleted={item.isCompeleted}
          />
        );
      })}
    </>
  );
};
export default memo(TaskList);
