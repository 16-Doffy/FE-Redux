import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import Card from "./Uis/Card";
import { toggleDarkMode } from "./Redux-toolkit/globalSlice";

function App() {
  // const { count } = useSelector((state) => state.counter);
  const globalOptions = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const handleToggleDarkMode = () => {
dispatch(toggleDarkMode(true));
console.log("first",globalOptions)
  }
  return (
    // <div>
    //   Hello Tailwind!
    //   <h2>the count from app is {count}</h2>
    //   <Count />
    // </div>
    <div>
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}

export default App;
