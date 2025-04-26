import React from "react";

const Card = () => {
  return (
    <div className="w-[600px] m-auto bg-white p-3 rounded-2xl shadow dark:bg-slate-900">
      <div className="card-image mb-5">
        <img
          src="https://cdn2.tuoitre.vn/471584752817336320/2023/10/24/6-16981653157201383365920.jpg"
          alt=""
          className="object-cover w-400 h-400 rounded-xl"
        />
      </div>
      <div className="card-content ">
        <div className="block p-4 font-semibold text-center text-white bg-blue-500 rounded-lg ">
explore
        </div>
      </div>
    </div>
  );
};

export default Card;
