import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-teal-500 rounded-lg text-white text-2xl font-bold w-14 h-14 shadow-slate-100 transition hover:-translate-y-1 hover:scale:110 hover:shadow-lg hover:shadow-teal-200"
      >
        {value}
      </button>
    </>
  );
};

export default Square;
