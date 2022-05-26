import React from "react";
export const TasksContext = React.createContext({
  tasks: [],
  AddTasksHandler: () => {},
  DoneTasksHandler: (id) => {},
  RemoveTasksHandler: (id) => {},
  editTasksHandler: () => {},
});
