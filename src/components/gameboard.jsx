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
              `card ${gamecard.index} hasn't been clicked. gamecard.selected: ${gamecard.selected}`
            );
            let targetCard;
            for (let i = 0; i < gameCards.length; i++) {
              if (gameCards[i].index == gamecard.index) {
                console.log(`found it! The clicked index is ${i}`);
                let newGamecards = [];
                for (let j = 0; j < gameCards.length; j++) {
                  if (
                    // if this gamecard is not the one that is selected, create a copy and push it to newGamecards
                    gameCards[j].index !== i
                  ) {
                    const newCard = {
                      url: gameCards[j].url,
                      index: gameCards[j].index,
                      selected: gameCards[j].selected,
                    };
                    newGamecards.push(newCard);
                  } else {
                    // We're changing this card selected to true because it's the one the useer clicked
                    const newCard = {
                      url: gameCards[j].url,
                      index: gameCards[j].index,
                      selected: true,
                    };
                    console.log(newCard);
                    newGamecards.push(newCard);
                  }
                }
                let shuffledCards = [];
                while (newGamecards.length > 0) {
                  let randomIndex = Math.floor(
                    Math.random() * newGamecards.length
                  );
                  let randomCard = newGamecards.splice(randomIndex, 1)[0];
                  shuffledCards.push(randomCard);
                }
                setGameCards(shuffledCards);
              }
            }
            setCurrentScore(currentScore + 1);
            if (topScore < currentScore + 1) {
              setTopScore(currentScore + 1);
            }
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

  return (
    <div className="gameboard">
      {gameCards.map((card) => {
        return <Card gamecard={card} key={card.index} />;
      })}
    </div>
  );
}

export default Gameboard;

// ************************************************************************************
// ************************************************************************************

// COOL! Now we're mapping over each of our card objects and making an element, using the card object info and a key.
// Next step finish our click handlers for the cards. Then shuffle. Then multiple rounds. And make sure no duplicate URLs
// Things to look up:
// How to copy an array or object with only one property changed
// What to do when you've got too many nested for/if loops... Looks like a christmas tree

// ************************************************************************************
// ************************************************************************************
