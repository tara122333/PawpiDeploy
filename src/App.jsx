import DefaultHOC from "./HOC/DefaultHOC";
import HomeDefault from "./pages/DefaultHome";
import Temp from "./pages/Temp";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <DefaultHOC path="/:type" exact component={HomeDefault}/>
      <DefaultHOC path="/" exact component={Home}/>
      <DefaultHOC path="/help/aboutus" exact component={Temp}/>
    </>
  );
};

export default App;
