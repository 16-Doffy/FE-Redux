import { useSelector } from "react-redux";
import "./index.css";
import Count from "./Count";

function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      Hello Tailwind!
      <h2>the count from app is {count}</h2>
      <Count />
    </div>
  );
}

export default App;
