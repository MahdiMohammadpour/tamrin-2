const addTaskForm = ({onChange,task}) => {
  return (
    <form>
        
        <div className="flex justify-around place-items-center bg-orange-100 p-2 rounded shadow-md">
          <label>نام تسک</label>
          <input
            type="text"
            onChange={onChange}
            name="taskName"
            value={task.taskName}
            className="shadow-md w-16 p-1 mr-20 rounded"
          />
        </div>
        <div className="flex justify-around place-items-center bg-orange-100 p-2 rounded shadow-md">
          <label>نام کارشناس</label>
          <input
            type="text"
            onChange={onChange}
            name="expertName"
            value={task.expertName}
            className="shadow-md w-16 p-1 mr-20 rounded"
          />
        </div>

    </form>
  );
};

export default addTaskForm;
