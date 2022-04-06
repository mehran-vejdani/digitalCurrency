import React, { useEffect, useState } from "react";
//components
import Loader from "../loader/Loader";
import Coin from "../coins/Coin";
//API
import { getCoin } from "../../services/api";
const Landing = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
      console.log(data);
    };
    fetchAPI();
  }, []);
  return (
    <>
      <input type="text" placeholder="search coins" />
      {coins.length ? (
        <div>
          {coins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.market_cap_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
