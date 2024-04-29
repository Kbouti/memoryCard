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
// This worked! So now we've found the card. We need to set selected to true, then create a new array of all our objects(with one changed), then set state again
                // targetCard = gameCards[i];
              }
            }
// Ok Now we've accessed the list of gamecard objects. Next we need to find the matching index, change selected to true,  and set state again
// We can do this with a loop!
// Create a new array
// loop through old list, if index doesnt match, push to list. If match, adjust selected

            // We need to set the card to clicked. 
            // To do that, We need to establish a NEW array of gamecard objects that is the same but with this card selected:true
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
