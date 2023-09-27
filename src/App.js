import React from "react";

import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import Body from "./Components/UI/Body/Body";
import TasksProvider from "./Components/Providers/TasksProvider";

const App = () => {
  return (
    <div className="flex flex-col justify-center ">
      <Header />
      <TasksProvider>
        <Body />
      </TasksProvider>
      <Footer />
    </div>
  );
};

export default App;
