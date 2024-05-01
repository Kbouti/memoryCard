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
              `Card ${gamecard.index} already clicked. gamecard.selected: ${gamecard.selected}`
            );
            console.log(`You lose, round over`);
            setGameOver(true);
            return;
          } else {
            console.log(
              `card ${gamecard.index} has not been clicked. gamecard.selected: ${gamecard.selected}`
            );
            let targetIndex = gamecard.index;
            let targetCard;
            for (let i = 0; i < gameCards.length; i++) {
              // Loop through all gamecards, find the one that was clicked:
              if (gameCards[i].index == targetIndex) {
                console.log(`found it! The clicked index is ${gameCards[i].index}`);
                let newGamecards = [];
                for (let j = 0; j < gameCards.length; j++) {
                  if (
                    // if this gamecard is not the one that is selected, create a copy and push it to newGamecards
                    gameCards[j].index !== gameCards[i].index
                  ) {
                    const newCard = {
                      url: gameCards[j].url,
                      index: gameCards[j].index,
                      selected: gameCards[j].selected,
                    };
                    newGamecards.push(newCard);
                  } else {
                    // We're changing this card selected to true because it's the one the user clicked
                    const newCard = {
                      url: gameCards[j].url,
                      index: gameCards[j].index,
                      selected: true,
                    };
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

// We are shuffling!! But there's still a bug. Play a fe rounds, it's ending the game prematurely


// Need to allow multiple rounds. And make sure no duplicate URLs
// Things to look up:
// How to copy an array or object with only one property changed
// What to do when you've got too many nested for/if loops... Looks like a christmas tree

// ************************************************************************************
// ************************************************************************************
