import React from "react";
import { useState, useEffect } from "react";

function Gameboard({
  currentScore,
  setCurrentScore,
  topScore,
  setTopScore,
  urlsReceived,
  setUrlsReceived,
}) {
  function Card({ index }) {
    useEffect(() => {
      // Fetch url from API
    });
    return (
      <div className="card">
        <p>{index}</p>
      </div>
    );
  }
  if (!urlsReceived) {
    return <div className="loading">Loading...</div>;
  } else {
    // Trying to figure out how/when to call the API.....
    // If I call the API in each card we won't be able to prevent duplicates
    // So call it here in a loop and get 12 different URLs? That still sounds like the best way to do it. Then we draft each card with it's own unique url from the list

    return (
      <div className="gameboard">
        <Card index="1" />
        <Card index="2" />
        <Card index="3" />
        <Card index="4" />
        <Card index="5" />
        <Card index="6" />
        <Card index="7" />
        <Card index="8" />
        <Card index="9" />
        <Card index="10" />
        <Card index="11" />
        <Card index="12" />
      </div>
    );
  }
}
export default Gameboard;
