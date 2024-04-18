import React from "react";
import { useState, useEffect } from "react";

import Scoreboard from "./scoreboard";
import Gameboard from "./gameboard";

export default function Body() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [urlsReceived, setUrlsReceived] = useState(false);
  const [urlList, setUrlList] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [playerGuesses, setPlayerGuesses] = useState([]);

  let newArray = [];

  useEffect(() => {
    async function fetchData() {
      while (newArray.length < 12) {
        const result = await fetch("https://random.dog/woof.json");
        result.json().then((json) => {
          const string = json.url.toString();
          let last3 = string.substr(string.length - 3);
          last3 = last3.toLowerCase();
          if (last3 == "jpg") {
            newArray.push(json.url);
            console.log(`added a suitable url. New length: ${newArray.length}`);
          }
        });
      }
      console.log(`newArray length: ${newArray.length}`);
      setUrlList(newArray);
      setUrlsReceived(true);
      return newArray;
    }
    fetchData();
  }, []);

  if (urlsReceived) {
    return (
      <>
        <Scoreboard
          currentScore={currentScore}
          topScore={topScore}
          urlsReceived={urlsReceived}
          gameOver={gameOver}
        />
        <Gameboard
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          topScore={topScore}
          setTopScore={setTopScore}
          urlsReceived={urlsReceived}
          setUrlsReceived={setUrlsReceived}
          urlList={urlList}
          setUrlList={setUrlList}
          gameOver={gameOver}
          setGameOver={setGameOver}
          playerGuesses={playerGuesses}
          setPlayerGuesses={setPlayerGuesses}
        />
      </>
    );
  } else {
    return <div className="loading">Loading...</div>;
  }
}
