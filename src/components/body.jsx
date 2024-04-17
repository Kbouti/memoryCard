import React from "react";
import { useState, useEffect } from "react";

import Scoreboard from "./scoreboard";
import Gameboard from "./gameboard";


export default function Body() {
    const [currentScore, setCurrentScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
  


  return (
    <>
      <Scoreboard
      currentScore={currentScore}
      topScore={topScore} />
      <Gameboard/>
    </>

  );
}
