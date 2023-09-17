import { useTasks } from "../Providers/TasksProvider";
import Task from "../Task/Task";

const TaskTable = () => {
  const tasks = useTasks();

  console.log(tasks);
  return (
    <div className="w-[70%] h-[400px]">
      <div className="flex justify-between px-20 bg-amber-400  h-[52px] p-4 mr-4 rounded shadow-md text-center">
        <p>نام تسک </p>
        <p>نام کارشناس</p>
        <p>وضعیت</p>
      </div>
      <div className="flex flex-col bg-gray-50  h-[333px] p-4 mr-4 mt-[15px] rounded shadow-md overflow-y-scroll">
        {tasks.map(task => {return <Task task={task}/>})}
      </div>
    </div>
  );
};

export default TaskTable;
