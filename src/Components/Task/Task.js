const Task = ({ task }) => {
  return (
    <div className="flex justify-between px-16 text-center mt-4 border-b-2 ">
      <p >{task.name}</p>
      <p >{task.expert}</p>
      <p >{task.status.label}</p>
    </div>
  );
};

export default Task;
