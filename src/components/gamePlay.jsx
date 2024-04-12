import { useState, useEffect } from "react";

function scramble(key) {
  const cards = document.getElementsByClassName("gameCard");
  const targetCard = key.target.parentElement;
  console.log(`Scramble function called. Cards: ${cards}`);
  console.log(`targetCard: ${targetCard}`);
    console.log(`targetCard.classList: ${targetCard.classList}`)


  // Now if we could just get this card's key??
  // Remove event listeners?
}

function beginGame() {
  const startupMessage =
    "Welcome to Memory Card! Click on a dog to cause the board to shuffle. You get a point if you haven't clicked that piece before. You lose if you repeat a click";
  setTimeout(() => {
    // alert(startupMessage);
    console.log(startupMessage);
    const cards = document.getElementsByClassName("gameCard");

    console.log(`cards: ${cards}`);
    console.log(`cards[0]: ${cards[0]}`);

    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", scramble);
    }
  }, 6000);
}

export default beginGame;
