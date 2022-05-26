import Header from "./Header/Header";
import TaskProvider from "./Provider/TaskProvider";
import AddTaskForm from "./Tasks/AddTaskForm/AddTaskForm";
import TasksList from "./Tasks/TasksList/TasksList";
function App() {
  return (
    <TaskProvider>
      <Header />
      <AddTaskForm />
      <TasksList />
    </TaskProvider>
  );
}

export default App;
