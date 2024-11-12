import React from "react";

const Bottle = ({ bottle, handleAddToCart }) => {
  const {
    id,
    name,
    saller,
    price,
    stock,
    rating,
    ratingsCount,
    img,
    shipping,
    quantity,
  } = bottle;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="mb-0">
            <b>Saller:</b> {saller}
          </p>
          <p className="mb-0">
            <b>Available Stock:</b> {saller}
          </p>
          <p className="mb-0">
            <b>Price:</b> ${price}
          </p>
          <p className="mb-0">
            <b>Shipping Charge:</b> ${shipping}
          </p>
          <p className="mb-0">
            <b>Rating:</b> ${rating}
          </p>
        </div>
        <div className="card-footer">
          <button
            onClick={() => handleAddToCart(bottle)}
            className="btn btn-primary"
          >
            Busy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
