import React, { useEffect, useState } from "react";
import PostureCard from "../Card/PostureCard";
import ExerciseTime from "../ExerciseTime/ExerciseTime";
import Logo from "../../img/logo/logo-2.png";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeToCart = (id) => {
    const remining = cart.filter((v) => v.id !== id);
    setCart(remining);
  };

  return (
    <div className="mx-[10px]">
      <div className="lg:grid grid-cols-10 gap-4">
        <div className="col-span-7">
            <div className="flex items-center my-4">
          <div className="avatar mr-4">
            <div className="w-12 rounded-full">
              <img src={Logo} alt="" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-black">Hero Fitness and Strength Club</h1>
          </div>
          <div className="lg:grid grid-cols-3 gap-4">
            {players.map((item) => (
              <PostureCard
                key={item.id}
                addToCart={addToCart}
                removeToCart={removeToCart}
                cart={cart}
                player={item}
              />
            ))}
          </div>
        </div>

        {/* cart */}
        <div className="col-span-3">
          <div className="card   shadow-xl">
            <div className="card-body">
              <ExerciseTime cart={cart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
