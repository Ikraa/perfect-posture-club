//  Handle exercise card
import React from "react";

const PostureCard = (props) => {
  // console.log(props.exercise.name);
  const {
    name,
    details,
    startAge,
    toAge,
    unit,
    ageUnit,
    time,
    url,
    addToCart,
    exercise,
  } = props.exercise;
  return (
    <div className="card   shadow-xl">
      <figure className="px-10 pt-10">
        <img src={url} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-black text-lg">{name}</h2>
        <p className="text-gray-500">{details}</p>
        <p className="text-md font-bold text-black">
          For Age: {startAge}-{toAge}{" "}
          <span className="text-green-600"> {ageUnit}</span>
        </p>
        <p className="text-md font-bold text-black">
          Time required: {time} <span className="text-green-600"> {unit}</span>
        </p>
        <div className="">
          <button
            onClick={() => {
              addToCart(exercise);
            }}
            className={`btn btn-primary`}
          >
            Added
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostureCard;
