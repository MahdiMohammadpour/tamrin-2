import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import TasksProvider from "./Components/Providers/TasksProvider";

const App = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header />
      <TasksProvider>
        <Body />
      </TasksProvider>
      <Footer />
    </div>
  );
};

export default App;
