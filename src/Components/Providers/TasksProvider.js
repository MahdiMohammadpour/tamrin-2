import React, { useContext, useId, useReducer } from "react";

import { TasksData } from "../../db/Tasks";

const TasksContext = React.createContext();
const TasksContextDispatcher = React.createContext();

const reducer = (state, action) => {
  if (action.type === "add") {
    const newTask = {
      ...action.task,
      id:
        action.task.status.value + "-" + Math.floor(Math.random() * 1000) + Date.now(),
    };
    const updatedTasks = [...state, newTask];
    return updatedTasks;
  }
};

const TasksProvider = ({ children }) => {
  const [Tasks, dispatch] = useReducer(reducer, TasksData);
  return (
    <TasksContext.Provider value={Tasks}>
      <TasksContextDispatcher.Provider value={dispatch}>
        {children}
      </TasksContextDispatcher.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;

export const useTasks = () => useContext(TasksContext);
export const useTasksActions = () => useContext(TasksContextDispatcher);
