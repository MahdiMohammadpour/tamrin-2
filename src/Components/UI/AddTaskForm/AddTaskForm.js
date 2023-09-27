import Select from "react-select";
import { useState } from "react";
import { useTasksActions } from "../../Providers/TasksProvider";

const statusOptions = [
  { value: "done", label: "انجام شده" },
  { value: "notdone", label: "انجام نشده" },
  { value: "doing", label: "در حال انجام" },
  { value: "challenge", label: "چالشی" },
];

const selectStyles = {
  control: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: "white",
    borderRadius: "0.35rem",
    border: "none",
    cursor: "pointer",
  }),
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
      width: "96%",
      margin: "2%",
      borderRadius: "3px",
    };
  },
};

const AddTaskForm = () => {
  const [task, setTask] = useState({ name: "", expert: "", status: "" });
  const dispatch = useTasksActions();

  const changeHandler = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const changeStatus = (selectedOption) => {
    setTask({ ...task, status: selectedOption });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!task.name || !task.expert || !task.status.value) {
      alert("لطفا همه فیلد ها را پر کنید");
      return;
    }
    dispatch({ type: "add", task: task });
    setTask({ name: "", expert: "", status: "" });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex  justify-between items-center bg-gray-50 w-full p-2 rounded shadow-md"
    >
      <div className="flex justify-between items-center bg-amber-400 p-2 pr-4  rounded shadow-md w-[25%] h-[48px]">
        <label>نام تسک</label>
        <input
          type="text"
          onChange={changeHandler}
          name="name"
          value={task.name}
          className="shadow-md w-[65%] p-1 text-center rounded  focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center bg-amber-400 p-2 pr-4 rounded shadow-md w-[25%] h-[48px]">
        <label>نام کارشناس</label>
        <input
          type="text"
          onChange={changeHandler}
          name="expert"
          value={task.expert}
          className="shadow-md w-[65%] p-1 text-center rounded focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center bg-amber-400 p-2 pr-4 rounded shadow-md w-[25%] h-[48px]">
        <label>وضعیت</label>
        <Select
          title="سلام"
          value={task.status}
          options={statusOptions}
          onChange={changeStatus}
          className="flex flex-col justify-center shadow-md w-[65%] text-center  bg-transparent "
          styles={selectStyles}
        />
      </div>
      <button
        type="submit"
        className="bg-amber-400 w-20 p-2 pr-4 rounded  shadow-md hover:bg-[#d4ab28] "
      >
        ثبت
      </button>
    </form>
  );
};

export default AddTaskForm;
