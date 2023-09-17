import { useState } from "react";
import addTaskForm from "../addTaskForm/addTaskForm";
const Body = () => {
  const [task,setTask] = useState({taskName:"",expertName:""})
  const changeHandler = (e) => {
    setTask({...task,[e.target.name]:e.target.value})
  }
  return (
    <div className="flex my-16 text-center justify-center">
      <addTaskForm onChange={changeHandler} task={task}/>
    </div>
  );
};

export default Body;
