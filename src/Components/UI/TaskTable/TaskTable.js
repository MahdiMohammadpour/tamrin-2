import { useState } from "react";
import { useTasks } from "../../Providers/TasksProvider";
import Task from "../Task/Task";
import { useTasksActions } from "../../Providers/TasksProvider";

const statusList = ["انجام شده", "انجام نشده", "در حال انجام", "چالشی"];

const TaskTable = () => {
  const tasks = useTasks();
  const dispatch = useTasksActions();

  console.log(tasks);
  return (
    <div className="relative flex justify-between w-full h-full mt-3 ">
      {statusList.map((status, index) => {
        return (
          <div
            className={`flex flex-col w-full h-full ${index && "mr-3"}`}
            key={index}
          >
            <div className="flex items-center justify-center bg-amber-400 rounded shadow h-[50px] ">
              {status}
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded shadow h-full mt-2 overflow-y-scroll px-2">
              {tasks.map((task) => {
                return (
                  task.status.label === status && (
                    <Task
                      task={task}
                      key={task.id}
                      onRemove={() => dispatch({ type: "remove", id: task.id })}
                      editComplete={(editedTask) =>
                        dispatch({
                          type: "edit",
                          id: task.id,
                          editedTask: editedTask,
                        })
                      }
                    />
                  )
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskTable;
