import React, { useEffect, useState } from "react";

export default function Card() {
  const [user, setUser] = useState([]);

  //componentDidMount
  useEffect(() => {
    fetch("https://api.devcdc.com/cricket")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div className="card border-gray-300 border-2 w-2/3 bg-white py-4 px-6 mx-4 my-4">
      <div>
        <h1>2nd ODI</h1>
      </div>
      <div>
        <h1>London</h1>
      </div>
      <div className="flex space-x-4">
        <div className="flex flex-col space-x-8">
          <div className="font-bold text-xl">India</div>
          <div className="font-bold text-xl">India</div>
        </div>
        <div className="flex flex-col space-x-8">
          <div className="pb-2 text-xl">Today</div>
          <div className="pb-2 text-xl">5:30 PM IST</div>
        </div>
      </div>
    </div>
  );
}
