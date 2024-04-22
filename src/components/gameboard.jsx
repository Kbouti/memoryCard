import React from "react";
import { useState, useEffect } from "react";

function Gameboard({
  currentScore,
  setCurrentScore,
  topScore,
  setTopScore,
  urlsReceived,
  setUrlsReceived,
  urlList,
  setUrlList,
  gameOver,
  setGameOver,
  playerGuesses,
  setPlayerGuesses,
}) {
  function Card({
    index,
    url,
    currentScore,
    setCurrentScore,
    playerGuesses,
    setPlayerGuesses,
  }) {
    return (
      <div
        onClick={() => {
          if (gameOver) {
            alert(`The game is already over, stop clicking`);
            return;
          }
          console.log(`playerGuesses: ${playerGuesses}`);
          let newArray = [];
          for (let i = 0; i < playerGuesses.length; i++) {
            newArray.push(playerGuesses[i]);
            // console.log(newArray);
            if (playerGuesses[i] === index) {
              // ************************************************************************************************************************
              // Lose conditions
              // ************************************************************************************************************************
              setGameOver(true);
              return;
            }
            if (playerGuesses.length === 11) {
              // ************************************************************************************************************************
              // Win conditions
              // ************************************************************************************************************************
              setGameOver(true);
              setCurrentScore(12);
              return;
            }
          }
          if (topScore < currentScore + 1) {
            setTopScore(currentScore + 1);
          }
          shuffleCards();
          newArray.push(index);
          setPlayerGuesses(newArray);
          console.log(`card ${index} clicked`);
          console.log(`clicked cards so far: ${newArray}`);
          setCurrentScore(currentScore + 1);
        }}
        className="card"
      >
        <img src={url}></img>
      </div>
    );
  }

  function shuffleCards() {
    console.log(`shuffleCards function called`);
    const newArray = [];
    for (let i = 0; i < urlList.length; i++) {
      newArray.push(urlList[i]);
    }
    for (let i = 0; i < newArray.length; i++) {
      let randomNumber = Math.floor(Math.random() * urlList.length);
      console.log(`randomNumber: ${randomNumber}`);
    }
  }

  // ************************************************************************************
  // ************************************************************************************

  // So below we're hard-coding N cards and giving them each a URL from our list, as well as an index.
  // The next step is to refactor from using urlList to using the cards objects. We may need to refactor how we keep track of score. 

  // We basically just need to shuffle the dom and create the option to play multiple rounds of the game.
  //   And make sure our urlList doesn't include any duplicates
  // ************************************************************************************
  // ************************************************************************************


  return (
    <div className="gameboard">
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="1"
        url={urlList[0]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="2"
        url={urlList[1]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="3"
        url={urlList[2]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="4"
        url={urlList[3]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="5"
        url={urlList[4]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="6"
        url={urlList[5]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="7"
        url={urlList[6]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="8"
        url={urlList[7]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="9"
        url={urlList[8]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="10"
        url={urlList[9]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="11"
        url={urlList[10]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        playerGuesses={playerGuesses}
        setPlayerGuesses={setPlayerGuesses}
        index="12"
        url={urlList[11]}
      />
    </div>
  );
}

export default Gameboard;
