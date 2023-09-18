import Select from "react-select";
import { useState } from "react";
import { useTasksActions } from "../Providers/TasksProvider";

const statusOptions = [
  { value: "done", label: "انجام شده" },
  { value: "notdone", label: "انجام نشده" },
  { value: "doing", label: "در حال انجام" },
  { value: "challenge", label: "چالشی" },
];

const AddTaskForm = () => {
  const [task, setTask] = useState({ name: "", expert: "", status: "" });
  const dispatch = useTasksActions();

  const selectStyles = {
    control: (styles,{isFocused}) => ({ ...styles, backgroundColor: "white",border : isFocused && "none"}),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#fcd34d"
          : isFocused
          ? "#fde68a"
          : "transparent",
        cursor: isFocused && "pointer",
        color: "black",
        width : "96%",
        margin : "2%",
        borderRadius : "3px"
      };
    },
  };

  const changeHandler = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const changeStatus = (selectedOption) => {
    setTask({ ...task, status: selectedOption });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "add", task: task });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-between bg-gray-50 w-[25%] h-[400px] p-4 rounded shadow-md"
    >
      <div>
        <div className="flex justify-between items-center bg-amber-400 p-2 pr-4  rounded shadow-md">
          <label>نام تسک</label>
          <input
            type="text"
            onChange={changeHandler}
            name="name"
            value={task.name}
            className="shadow-md w-[65%] p-1 text-center rounded"
          />
        </div>
        <div className="flex justify-between items-center bg-amber-400 p-2 pr-4 rounded shadow-md mt-4">
          <label>نام کارشناس</label>
          <input
            type="text"
            onChange={changeHandler}
            name="expert"
            value={task.expert}
            className="shadow-md w-[65%] p-1 text-center rounded"
          />
        </div>
        <div className="flex justify-between items-center bg-amber-400 p-2 pr-4 rounded shadow-md mt-4">
          <label>وضعیت</label>
          <Select
            title="سلام"
            value={task.status}
            options={statusOptions}
            onChange={changeStatus}
            className="flex flex-col justify-center shadow-md w-[65%]  text-center rounded bg-transparent"
            styles={selectStyles}
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-amber-400 p-2 pr-4 rounded shadow-md hover:bg-[#d4ab28] "
      >
        ثبت
      </button>
    </form>
  );
};

export default AddTaskForm;
