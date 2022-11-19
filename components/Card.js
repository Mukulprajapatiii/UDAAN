import React from "react";

const Card = ({ name, space, setDisplaySellerData, displaySellerData }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://api.lorem.space/image/shoes?w=200&h=200"
          alt="Shoes"
          className="rounded-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Luggage: {space} kg</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              displaySellerData
                ? setDisplaySellerData(0)
                : setDisplaySellerData(1);
            }}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
