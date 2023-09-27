import { useEffect, useState } from "react";
import { CgTrash, CgPen, CgCheck, CgKey } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";

const Task = ({ task, onRemove, editComplete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [showId, setShowId] = useState(false);
  const [tempTask, setTempTask] = useState({...task});
  const [status, setStatus] = useState({...tempTask.status});

  useEffect(() => {
    tempTask.status = status;
  }, [status]);

  const checkHandler = () => {
    setIsEdit(false);
    if (!tempTask.name || !tempTask.expert) {
      setTempTask(task);
      return;
    }
    editComplete(tempTask);
  };

  const closeHandler = () => {
    setIsEdit(false);
    setTempTask({...task});
    setStatus({...task.status});
    console.log(task);
  };

  const editHandler = () => {
    setIsEdit(true);
  };

  const showIdHandler = () => {
    setShowId(!showId);
  };

  const changeInputHandler = (e) => {
    setTempTask({ ...tempTask, [e.target.name]: e.target.value });
  };

  if (isEdit == false) {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <div
          className={`flex flex-col justify-between justify-center items-center px-16 text-center mt-3 px-2 py-2 overflow-hidden bg-gray-100 shadow w-full min-h-[80px] h-[80px]  ${
            showId ? "rounded-t-lg" : "rounded"
          }`}
        >
          <p
            className={`flex justify-center items-center w-full h-[50%] px-2 py-4  rounded ${
              task.status.value === "done"
                ? "bg-lime-400"
                : task.status.value === "notdone"
                ? "bg-red-500"
                : task.status.value === "doing"
                ? "bg-indigo-500"
                : task.status.value === "challenge"
                ? "bg-purple-500"
                : "bg-slate-200"
            }`}
          >
            {tempTask.name}
          </p>
          <div className="flex items-center justify-between w-full pr-1">
            <p className="flex items-center justify-center mr-2">
              {tempTask.expert}
            </p>
            <div className="flex">
              <button onClick={showIdHandler}>
                <CgKey className=" ml-1 text-gray-500 bg-transparent p-[0.2rem] text-[23px] rounded-[50%] shadow-md hover:bg-gray-400 hover:text-white " />
              </button>
              <button onClick={editHandler}>
                <CgPen className="ml-1 text-blue-400 bg-transparent p-[0.2rem] text-[23px] rounded-[50%] shadow-md hover:bg-blue-400 hover:text-white " />
              </button>
              <button onClick={onRemove}>
                <CgTrash className=" text-red-400 bg-transparent p-[0.2rem] text-[23px] rounded-[50%] shadow-md hover:bg-red-400 hover:text-white " />
              </button>
            </div>
          </div>
        </div>
        {showId && (
          <div className="flex items-cneter justify-center w-full rounded-b-lg px-2 py-1 mt-1 bg-gray-300">
            {tempTask.id}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-between justify-center items-center px-16 text-center mt-3 px-2 py-2 overflow-hidden bg-gray-100 rounded shadow w-full min-h-[80px] h-[80px]">
          <input
            className="flex justify-center items-center w-full h-[50%] px-2 py-4  rounded"
            onChange={changeInputHandler}
            value={tempTask.name}
            name="name"
          />
          <div className="flex items-center justify-between w-full pr-1">
            <input
              className="flex items-center justify-center rounded px-1 w-[60%] "
              onChange={changeInputHandler}
              value={tempTask.expert}
              name="expert"
            />
            <div className="flex">
              <button onClick={checkHandler}>
                <CgCheck className="ml-1 text-green-400 bg-transparent p-[0.2rem] text-[23px] rounded-[50%] shadow-md hover:bg-green-400 hover:text-white " />
              </button>
              <button onClick={closeHandler}>
                <IoIosClose className="ml-1 text-red-400 bg-transparent p-[0.2rem] text-[23px] rounded-[50%] shadow-md hover:bg-red-400 hover:text-white " />
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full text-[12px] mt-1 ">
          <button
            onClick={() =>
              (setStatus({ value: "done", label: "انجام شده" }))
            }
            className={`px-2 py-1 rounded hover:bg-slate-300 ml-1 ${
              status.value == "done" ? "bg-green-200" : "bg-slate-200"
            }`}
          >
            انجام شده
          </button>
          <button
            onClick={() =>
              (setStatus({ value: "notdone", label: "انجام نشده" }))
            }
            className={`px-2 py-1 rounded hover:bg-slate-300 ml-1 ${
              status.value == "notdone" ? "bg-red-200" : "bg-slate-200"
            }`}
          >
            انجام نشده
          </button>
          <button
            onClick={() =>
              (setStatus({ value: "doing", label: "در حال انجام" }))
            }
            className={`px-2 py-1 rounded hover:bg-slate-300 ml-1 ${
              status.value == "doing" ? "bg-blue-200" : "bg-slate-200"
            }`}
          >
            در حال انجام
          </button>
          <button
            onClick={() =>
              (setStatus({ value: "challenge", label: "چالشی" }))
            }
            className={`px-2 py-1 rounded hover:bg-slate-300 ml-1 ${
              status.value == "challenge" ? "bg-purple-200" : "bg-slate-200"
            }`}
          >
            چالشی
          </button>
        </div>
      </div>
    );
  }
};

export default Task;
