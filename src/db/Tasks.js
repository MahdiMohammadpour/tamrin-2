// tasks db with some defult data
export const TasksData = [
  {
    name: "test",
    expert: "test",
    status: { value: "done", label: "انجام شده" },
    id: "done" + "-" + Math.floor(Math.random() * 1000) + Date.now(),
  },
  {
    name: "test",
    expert: "test",
    status: { value: "notdone", label: "انجام نشده" },
    id: "notdone" + "-" + Math.floor(Math.random() * 1000) + Date.now(),
  },
  {
    name: "test",
    expert: "test",
    status: { value: "doing", label: "در حال انجام" },
    id: "doing" + "-" + Math.floor(Math.random() * 1000) + Date.now(),
  },
  {
    name: "test",
    expert: "test",
    status: { value: "challenge", label: "چالشی" },
    id: "challenge" + "-" + Math.floor(Math.random() * 1000) + Date.now(),
  },
];
