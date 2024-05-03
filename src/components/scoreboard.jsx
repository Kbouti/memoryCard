import { useState, useEffect } from "react";

function Scoreboard({ currentScore, topScore, urlsReceived, gameOver }) {
  if (!urlsReceived) {
    return null;
  }

if (gameOver && currentScore == 1){
  return (
    <section className="scoreboard loser">
    <div className="scoreContainer">
      <label>You lost really badly. </label>
      <label>Score: {currentScore} point</label>
    </div>
  </section>
  )
}

  if (gameOver && currentScore < 12) {
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


  if (currentScore == 12) {
    return (
      <section className="scoreboard winner">
        <div className="scoreContainer">
          <label>You win! </label>
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
