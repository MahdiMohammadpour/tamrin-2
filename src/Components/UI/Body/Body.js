import AddTaskForm from "../AddTaskForm/AddTaskForm";
import TaskTable from "../TaskTable/TaskTable";

const Body = () => {
  return (
    <div className="flex flex-col m-8  items-center relative h-[600px]">
      <AddTaskForm />
      <TaskTable />
    </div>
  );
};

export default Body;