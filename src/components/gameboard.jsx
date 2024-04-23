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
          } else {
            console.log(
              `card hasn't been clicked. gamecard.selected: ${gamecard.selected}`
            );

            // Set selected to true, shuffle, and rerender
            // Now we need to change it to clicked and shuffle the deck
            // Also check for win conditions?
            // But currently our card divs aren't being rendererd at all. Look down at our map call to figure that out
          }
          // Above here ^^ is the refactor in progress
          // ************************************************************************************************************************
          // ************************************************************************************************************************
          // Everything below this is old code not yet refactored.

          console.log(`playerGuesses: ${playerGuesses}`);
          let newArray = [];
          for (let i = 0; i < playerGuesses.length; i++) {
            newArray.push(playerGuesses[i]);
            // This loops through the past guess to see if the clicked node is on the list. We will be able to remove this when using the card object with selected property.
            if (playerGuesses[i] === index) {
              // Lose conditions
              setGameOver(true);
              return;
            }
            if (playerGuesses.length === 11) {
              // Win conditions
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
