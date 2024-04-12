import { useState, useEffect } from "react";

function scramble(key) {
  const cards = document.getElementsByClassName("gameCard");
  console.log(`Scramble function called. Cards: ${cards}`);
  console.log(`this.key: ${this.key}`);
  console.log(this.getAttribute("key"));
console.log(`clicked key: ${key}`);
console.log(`key.target.parentElement: ${key.target.parentElement})}`)
console.log(`key.target.parentElement.getAttribute("key"): ${key.target.parentElement.getAttribute("key")})}`)

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
