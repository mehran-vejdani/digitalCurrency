import React from "react";

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <>
      <img src={image} alt={image} />
      <span>{name}</span>
      <span>{symbol.toUpperCase()}</span>
      <span>{price.toLocaleString()}</span>
      <span>{priceChange}</span>
      <span>{marketCap.toLocaleString()}</span>
    </>
  );
};

export default Coin;
