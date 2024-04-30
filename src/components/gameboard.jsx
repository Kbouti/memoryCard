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
  gameCards,
  setGameCards,
}) {
  function Card({
    gamecard,
    index,
    url,
    selected,
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

          if (gamecard.selected) {
            console.log(
              `Card already clicked. gamecard.selected: ${gamecard.selected}`
            );
            console.log(`You lose, round over`);
            setGameOver(true);
            return;
          } else {
            console.log(
              `card hasn't been clicked. gamecard.selected: ${gamecard.selected}`
            );
            console.log(`gamecard.index: ${gamecard.index}`);
            console.log(`gameCards: ${gameCards}`)
            let targetCard;
            for (let i = 0;i < gameCards.length;i++){
              console.log(`gamecards iteration ${i}`);
              if (gameCards[i].index == gamecard.index){
                console.log(`found it!`)
                console.log(`The clicked index is ${i}`)
                let newGamecards = [];
                for (let j = 0;j < gameCards.length;j++){
                  if (
                    // if this gamecard is not the one that is selected, create a copy and push it to newGamecards
                    gameCards[j].index !== i
                  ){
                    console.log(`pushing an unaltered copy of this gamecard`);
                  } else {
                    console.log(`This is the card we need to change to selected`)
                  }
                }

              }
            }
            // THEN shufflecards, set new score. 

            // shuffleCards();
            // setCurrentScore(currentScore + 1);
            // if (topScore < currentScore + 1) {
            //   setTopScore(currentScore + 1);
            // }
          }

        }}
        className="card"
      >
        <img src={gamecard.url}></img>
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

  // COOL! Now we're mapping over each of our card objects and making an element, using the card object info and a key.
  // Next step finish our click handlers for the cards. Then shuffle. Then multiple rounds. And make sure no duplicate URLs

  // ************************************************************************************
  // ************************************************************************************

  return (
    <div className="gameboard">
      {gameCards.map((card) => {
        return <Card gamecard={card} key={card.index} />;
      })}
    </div>
  );
}

export default Gameboard;
