import React from "react";

const QuantityButton = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="flex items-center">
      <button
        className="py-1 px-2 border border-gray-400 rounded-md mr-2"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="py-1 px-2 border border-gray-400 rounded-md ml-2"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
