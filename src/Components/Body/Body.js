import AddTaskForm from "../AddTaskForm/AddTaskForm";
import TaskTable from "../TaskTable/TaskTable";


const Body = () => {
  return (
    <div className="flex my-16 text-center justify-center">
      <AddTaskForm />
      <TaskTable />
    </div>
  );
};

export default Body;
