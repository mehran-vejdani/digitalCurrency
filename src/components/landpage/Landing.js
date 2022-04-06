import React, { useEffect, useState } from "react";
//components
import Loader from "../loader/Loader";
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
            <p key={coin.id}>{coin.name}</p>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
