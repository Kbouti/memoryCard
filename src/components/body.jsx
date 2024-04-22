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

  //  *************************************************************************************
  // New state variables:
  const [gameRound, setGameRound] = useState(0);
  const [gameCards, setGameCards] = useState([]);
  //  *************************************************************************************

  const loading = ["Loading.", "Loading..", "Loading..."];
  const [loadingMessage, setLoadingMessage] = useState(loading[0]);
  function changeLoading() {
    for (let i = 0; i < loading.length; i++) {
      if (loading[i] == loadingMessage) {
        if (loadingMessage == loading[2]) {
          setLoadingMessage(loading[0]);
        } else {
          setLoadingMessage(loading[i + 1]);
        }
      }
    }
    setTimeout(changeLoading, 500);
  }

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
            // console.log(`added a suitable url. New length: ${newArray.length}`);
          }
        });
      }
      console.log(`URL array complete. Length: ${newArray.length}`);

      //  *************************************************************************************
      //  *************************************************************************************
      // Now we've created our card objects. Our next step is to utilize these to render our cards instead of the urlList
      const cards = [];
      for (let i = 0; i < newArray.length; i++) {
        cards.push({ url: newArray[i], index: i, selected: false });
      }
      setGameCards(cards);
      //  *************************************************************************************
      //  *************************************************************************************

      setUrlList(newArray);
      setUrlsReceived(true);
      return newArray;
    }
    fetchData();
  }, [gameRound]);

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
    setTimeout(changeLoading, 500);
    return <div className="loading">{loadingMessage}</div>;
  }
}
