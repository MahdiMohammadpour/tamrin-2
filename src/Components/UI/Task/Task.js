import { CgTrash } from "react-icons/cg";

const Task = ({ task, removeHandler }) => {
  return (
    <div className="flex flex-col justify-between justify-center items-center px-16 text-center mt-3 px-2 py-2 overflow-hidden bg-gray-100 rounded shadow w-full min-h-[80px] h-[80px]">
      <p
        className={`flex justify-center items-center w-full h-[50%] px-2 py-4  rounded ${
          task.status.value === "done"
            ? "bg-lime-400"
            : task.status.value === "notdone"
            ? "bg-red-500"
            : task.status.value === "doing"
            ? "bg-indigo-500"
            : "bg-purple-500"
        }`}
      >
        {task.name}
      </p>
      <div className="flex items-center justify-between w-full pr-1">
        <p className="mt-2">{task.expert}</p>
        <button onClick={removeHandler}>
          <CgTrash className="mt-2 text-red-400 bg-transparent p-[0.2rem] text-[23px] rounded-[50%] shadow-md hover:bg-red-400 hover:text-white " />
        </button>
      </div>
    </div>
  );
};

export default Task;
