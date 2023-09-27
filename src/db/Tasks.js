// tasks db with some defult data
export const TasksData = [
  {
    name: "header",
    expert: "mahdi",
    status: { value: "done", label: "انجام شده" },
    id: "done" + "-" + Math.floor(Math.random() * 1000) + Date.now(),
  },
  {
    name: "footer",
    expert: "amir",
    status: { value: "done", label: "انجام شده" },
    id: "done" + "-" + Math.floor(Math.random() * 1000) + Date.now(),
  },
];
