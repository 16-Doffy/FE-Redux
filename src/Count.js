import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementbyvalue } from "./Redux-toolkit/CounterSlide";
// import { decrement, increment, incrementbyvalue } from "./Redux/Counter";

const Count = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment()); // increment
  };
  const handleDecrement = () => {
    dispatch(decrement()); // decrement
  };
  const handleIncrementby = () => {
    dispatch(incrementbyvalue({value:10})); // incrementbyvalue
  };
  return (
    <div>
     
      <div className="flex justify-center items-center gap-x-5">
      <h2 className="mb-5">Count : {count}</h2>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrement}
        >
          Increment
        </button>

        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrementby}
        >
          by 10
        </button>
      </div>
    </div>
  );
};

export default Count;
