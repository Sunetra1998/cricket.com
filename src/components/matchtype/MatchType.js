import React from "react";
import Card from "../card/Card";

export default function MatchType() {
  return (
    <div className="match-container bg-slate-200 pt-4 pb-8">
      <div className="match-type bg-slate-400 rounded-full border-gray-400 mx-8">
        <button className="all-btn py-2 px-4 rounded-full text-black hover:border-white hover:bg-white w-1/3 focus:bg-white focus:text-red-700 hover:text-red-700 cursor-pointer ">
          ALL
        </button>
        <button className="international-btn py-2 px-4 rounded-full text-black hover:border-white hover:bg-white w-1/3 focus:bg-white focus:text-red-700  hover:text-red-700 cursor-pointer">
          INTERNATIONAL
        </button>
        <button className="domestic-btn py-2 px-4 rounded-full text-black hover:border-white hover:bg-white w-1/3 focus:bg-white focus:text-red-700 hover:text-red-700  cursor-pointer">
          DOMESTIC
        </button>
      </div>
      <Card />
    </div>
  );
}
