import { useState } from "react";
import { TasksContext } from "../context/Todo-context";
function TaskProvider(props) {
  const [tasks, setTasks] = useState([]);
  const AddTasksHandler = (name) => {
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const newTasks = [...tasks];
    newTasks.push({
      name,
      id: Math.floor(Math.random() * 10000),
      date: `${year} / ${month} / ${day}`,
      isCompeleted: false,
    });
    setTasks(newTasks);
  };
  const EditTasksHandler = () => {
    console.log("add tasks handler");
  };
  const RemoveTasksHandler = (id) => {
    console.log("remove handler ran", id);
    let newTasks = [...tasks];

    newTasks = newTasks.filter((item) => item.id !== id);
    console.log(newTasks);
    setTasks(newTasks);
  };
  const DoneTasksHandler = (id) => {
    const newTasks = [...tasks];
    const selectedIndex = newTasks.findIndex((item) => item.id === id);
    newTasks[selectedIndex].isCompeleted = true;
    setTasks(newTasks);
  };

  const contextValue = {
    tasks,
    AddTasksHandler,
    EditTasksHandler,
    RemoveTasksHandler,
    DoneTasksHandler,
  };
  return (
    <TasksContext.Provider value={contextValue}>
      {props.children}
    </TasksContext.Provider>
  );
}

export default TaskProvider;
