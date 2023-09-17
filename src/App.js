import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";

const App = () => {
  return (
      <div className="flex flex-col justify-center min-h-screen">
        <Header />
        <Body />
        <Footer />
      </div>
  );
};

export default App;
