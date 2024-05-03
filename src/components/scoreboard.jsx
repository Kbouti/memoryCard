import { useState, useEffect } from "react";

function Scoreboard({ currentScore, topScore, urlsReceived, gameOver, setGameOver }) {
  if (!urlsReceived) {
    return null;
  }

  if (gameOver && currentScore == 1) {
    return (
      <section className="scoreboard loser">
        <div className="scoreContainer">
          <label>You lost really badly. </label>
          <label>Score: {currentScore} point</label>
        </div>
      </section>
    );
  }

  if (gameOver && currentScore < 9) {
    return (
      <section className="scoreboard loser">
        <div className="scoreContainer">
          {currentScore < 4 ? (
            <>
              <label>You lost badly.</label>
              <label>Score: {currentScore} points</label>
            </>
          ) : (
            <>
              <label>You lost. </label>
              <label>Score: {currentScore} points</label>
            </>
          )}
        </div>
      </section>
    );
  }

  if (gameOver && currentScore < 12) {
    return (
      <section className="scoreboard almost">
        <div className="scoreContainer">
          {currentScore < 11 ? (
            <>
              <label>Not bad! But you still lost. </label>
              <label>Score: {currentScore} points</label>
            </>
          ) : (
            <>
              <label>So close! Only one away. </label>
              <label>Score: {currentScore} points</label>
            </>
          )}
        </div>
      </section>
    );
  }

  if (currentScore == 12) {
    setGameOver(true);
    return (
      <section className="scoreboard winner">
        <div className="scoreContainer">
          <label>Congratulations! You're a winner! </label>
          <label>Score: {currentScore} points</label>
        </div>
      </section>
    );
  }
  return (
    <section className="scoreboard">
      <div className="scoreContainer currentScore">
        <label>Current Score: {currentScore}</label>
      </div>
      <div className="scoreContainer topScore">
        <label>Top Score: {topScore}</label>
      </div>
    </section>
  );
}

export default Scoreboard;
