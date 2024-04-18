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
}) {
  function Card({ index, url, currentScore, setCurrentScore }) {
    return (
      <div
        onClick={() => {
          console.log(`card ${index} clicked`);
          setCurrentScore(currentScore + 1);
        }}
        className="card"
      >
        <img src={url}></img>
      </div>
    );
  }

  // ************************************************************************************
  // Siiiiiiick, we're making serious progress.
  // We've rendered cards and we're incrementing currentScore on each click.
  // Next we need to handle topScore, and finally......Rearranging the gameCards
  // ************************************************************************************

  return (
    <div className="gameboard">
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="1"
        url={urlList[0]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="2"
        url={urlList[1]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="3"
        url={urlList[2]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="4"
        url={urlList[3]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="5"
        url={urlList[4]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="6"
        url={urlList[5]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="7"
        url={urlList[6]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="8"
        url={urlList[7]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="9"
        url={urlList[8]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="10"
        url={urlList[9]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="11"
        url={urlList[10]}
      />
      <Card
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        index="12"
        url={urlList[11]}
      />
    </div>
  );
}

export default Gameboard;
