import React, { useEffect, useState } from "react";
import LocationImg from "../../img/location.png";
import Time from "./Time";
import { toast } from "react-toastify";
const getFromLocalStorage = () => {
  const data = localStorage.getItem("item");
  let getItem;
  if (data) {
    getItem = JSON.parse(data);
  } else {
    getItem = {};
  }
  return getItem;
};
const ExerciseTime = ({ cart, setCart }) => {
  const [breakTime, setBreakTime] = useState({});
  const [click, setIsClick] = useState(0);
  const totalexerciseTime = cart.reduce(
    (prev, current) => prev + current.time,
    0
  );
  const breakTimeData = [
    { id: 1, time: 15 },
    { id: 2, time: 25 },
    { id: 3, time: 35 },
    { id: 4, time: 50 },
    { id: 5, time: 100 },
  ];

  useEffect(() => {
    const data = getFromLocalStorage();
    setBreakTime(data);
    setIsClick(breakTime.index);
  }, []);
  console.log(breakTime);

  return (
    <div>
      <div className="flex mb-7">
        <div class="avatar mr-4">
          <div class="w-16">
            <img src="https://placeimg.com/192/192/people" alt="profile pic" />
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-700 mb-2">Ikra Munnisa</p>
          <div className="flex items-center">
            <img className="w-6 h-6 mr-2" src={LocationImg} alt="location pic" />
            <p className="text-lg text-gray-600"> 1/2, Joynal Market,Uttara</p>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-2 mt-4 text-lg font-semibold">Add a break Time</p>
      <div className="flex flex-wrap  bg-slate-200 rounded-[8px] p-[12px]">
        {breakTimeData.map((item, i) => (
          <Time
            key={i}
            item={item}
            setBreakTime={setBreakTime}
            i={i}
            setIsClick={setIsClick}
            breakTime={breakTime}
            click={click}
          />
        ))}
      </div>

      <p className="text-gray-600 mb-2 text-lg font-semibold">
        Exercise Details{" "}
      </p>
      <p className="text-gray-600 mb-4 p-[15px] rounded-[8px] bg-slate-200  text-lg font-semibold flex justify-between">
        <span>Exercise time </span>
        <span>{totalexerciseTime}</span>
      </p>
      <p className="text-gray-600 p-[15px] rounded-[8px] bg-slate-200 text-lg font-semibold flex justify-between">
        <span>Break time</span> <span>{breakTime.time}</span>
      </p>

      <button
        className="btn btn-primary btn-sm w-full mt-4"
        onClick={() => {
          //-----------------//
          setCart([]);
          setBreakTime({});
          setIsClick();
          localStorage.clear("item", "title");
          //==========//
          toast.success("Successfully completed your activity  ");
        }}
      >
        Activity Complete
      </button>
    </div>
  );
};

export default ExerciseTime;
