import Header from "./Header/Header";
import TaskProvider from "./Provider/TaskProvider";
import AddTaskForm from "./Tasks/AddTaskForm/AddTaskForm";
import FilterTasks from "./Tasks/FilterTasks/FilterTasks";
import LeftTasks from "./Tasks/Left Tasks/LeftTasks";
function App() {
  return (
    <TaskProvider>
      <Header />
      <LeftTasks />
      <AddTaskForm />
      <FilterTasks />
    </TaskProvider>
  );
}

export default App;
