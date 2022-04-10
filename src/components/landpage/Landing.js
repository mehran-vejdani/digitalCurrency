import React, { useEffect, useState } from "react";
import styles from "./landing.module.css";
//components
import Loader from "../loader/Loader";
import Coin from "../coins/Coin";
//API
import { getCoin } from "../../services/api";
const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
      console.log(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <input
        type="text"
        placeholder="search coins"
        value={search}
        onChange={searchHandler}
        className={styles.input}
      />
      {coins.length ? (
        <div className={styles.coinContainer}>
          {searchedCoins.map((coin) => (
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
