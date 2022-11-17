import React from "react";

const PostureCard = ({ player, addToCart, cart, removeToCart }) => {
  return (
    <div className="card   shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-black text-lg">{player.name}</h2>
        <p>{player.title}</p>
        <p className="text-md font-bold text-black">Time require:{player.time}</p>
        <div className="">
          <button
            onClick={() => {
              addToCart(player);
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
