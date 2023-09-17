import React, { useContext, useReducer } from "react";

import { TasksData } from "../../db/Tasks";

const TasksContext = React.createContext();
const TasksContextDispatcher = React.createContext();

const reducer = (state, action) => {
  if (action.type === "add") {
    const updatedTasks = [...state, action.task];
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
