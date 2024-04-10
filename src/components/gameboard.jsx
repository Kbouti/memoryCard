import { useState, useEffect } from "react";

function Gameboard({urlList}) {

  return <div className="gameboard">
    <img src={urlList[0]} alt="Random dog pic" />
    <img src={urlList[1]} alt="Random dog pic" />
  </div>;
}

export default Gameboard;
