import React from "react";

import spinner from "../../assets/loader.gif";
const Loader = () => {
  return (
    <div>
      <img src={spinner} alt="loader" />
      <h1>loading ....</h1>
    </div>
  );
};

export default Loader;
