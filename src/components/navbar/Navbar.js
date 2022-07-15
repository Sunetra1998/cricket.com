import React from "react";
import MatchType from "../matchtype/MatchType";

export default function Navbar() {
  return (
    <div className="navbar bg-slate-600 pt-4">
      <h1 className="text-3xl ml-6 md:ml-12 pt-4 text-white">Schedule</h1>
      <div className="nav-buttons mt-4">
        <button className="upcoming-btn w-1/3 p-2 text-gray-400 pb-3 border-0 hover:border-b-4 hover:border-b-red-600 hover:text-white cursor-pointer">
          UPCOMING
        </button>
        <button className="live-btn w-1/3 p-2 text-gray-400 pb-3 border-0 hover:border-b-4 hover:border-b-red-600 hover:text-white cursor-pointer">
          LIVE
        </button>
        <button className="results-btn w-1/3 p-2 text-gray-400 pb-3 border-0 hover:border-b-4 hover:border-b-red-600 hover:text-white cursor-pointer">
          RESULTS
        </button>
      </div>
      <MatchType />
    </div>
  );
}
