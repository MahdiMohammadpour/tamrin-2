import { useTasks } from "../Providers/TasksProvider";
import Task from "../Task/Task";

const statusList = ["انجام شده", "انجام نشده", "در حال انجام", "چالشی"];

const TaskTable = () => {
  const tasks = useTasks();
  return (
    <div className="flex w-[70%] h-[400px] mr-5">
      {statusList.map((status,index) => {
        return (
          <div className="flex flex-col w-[25%] h-[400px] mr-2" key={index}>
            <div className="flex items-center justify-center bg-amber-400 rounded shadow h-[50px] ">
              {status}
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded shadow h-full mt-2 overflow-y-scroll px-2">
              {tasks.map((task) => {
                return task.status.label === status && <Task task={task} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskTable;
