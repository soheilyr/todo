import { useState } from "react";
import TasksList from "../TasksList/TasksList";
import "./FilterTasks.css";
const FilterTasks = (props) => {
  const [TaskTarget, setTaskTarget] = useState("All");
  const FilterChangeHandler = (e) => {
    setTaskTarget(e.target.value);
  };
  return (
    <>
      <form action="" className="filter-task-form">
        <select name="filterTasks" onChange={FilterChangeHandler}>
          <option value="All">All</option>
          <option value="Compelete">Compelete</option>
          <option value="UnCompelete">UnCompelete</option>
        </select>
      </form>
      <TasksList taskTarget={TaskTarget} />
    </>
  );
};
export default FilterTasks;
