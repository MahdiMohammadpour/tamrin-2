const Task = ({ task }) => {
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
      <p className="mt-2">{task.expert}</p>
    </div>
  );
};

export default Task;
