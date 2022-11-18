import React from "react";

const PostureCard = ({ exercise, addToCart,cart, removeToCart }) => {
  return (
    <div className="card   shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={exercise.url}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-black text-lg">{exercise.name}</h2>
        <p className="text-gray-500">{exercise.details}</p>
        <p className="text-md font-bold text-black">For Age: {exercise.startAge}-{exercise.toAge} <span className="text-green-600"> {exercise.ageUnit}</span></p>
        <p className="text-md font-bold text-black">Time required: {exercise.time}    <span className="text-green-600"> {exercise.unit}</span></p>
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
