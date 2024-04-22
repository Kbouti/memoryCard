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
    const gameboard = document.getElementsByClassName("gameboard")[0];
    // const children = gameboard.children;
    const children = gameboard.getElementsByClassName("card");
    // console.log(`gameboard: ${gameboard}`);
    // console.log(`children: ${children}`);
    // console.log(`children[0]: ${children[0]}`);
    // console.log(`children[0].index: ${children[0].index}`);
    // console.log(`shuffle shuffle. gamechildren length: ${children.length}`);
    for (let i = 0; i < 12; i++) {
      // ************************************************************************************
      // Ok we're not getting an error anymore, and in theory this is doing what we want....
      //   But it doesn't work. Maybe it does reorder but then it sorts them again?
      // How do I access the key? Maybe we need to use key instead of index?

      // I'm trying to remove each node just fer shits n gigs and now I'm getting an error that says "Node.removeChild: The node to be removed is not a child of this node"
      // What dafuq's up with that? I don't know but we should probably investigate it.

gameboard.removeChild(children[0]);

      const randomIndex = Math.floor(Math.random() * i);
      console.log(`index of child we're appending: ${randomIndex}`);
      gameboard.appendChild(children[randomIndex]);
      // ************************************************************************************
    }
  }

  // ************************************************************************************
  // We basically just need to shuffle the dom and create the option to play multiple rounds of the game.
  //   And make sure our urlList doesn't include any duplicates
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
