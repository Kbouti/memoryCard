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
    console.log(`urlsReceived is false`);

    let newArray = [];

    // ************************************************************************************
    // We're calling this conditionally and that's not allowed.
    // WTF do I do if I can't call this conditionally????
    // ************************************************************************************
    useEffect((urlList, setUrlList, urlsReceived, setUrlsReceived) => {
      async function fetchData() {
        while (newArray.length < 12) {
          const result = await fetch("https://random.dog/woof.json");
          result.json().then((json) => {
            const string = json.url.toString();
            let last3 = string.substr(string.length - 3);
            last3 = last3.toLowerCase();
            if (last3 == "jpg") {
              newArray.push(json.url);
              console.log(
                `added a suitable url. New length: ${newArray.length}`
              );
            }
          });
        }
        console.log(`newArray length: ${newArray.length}`);
        return newArray;
      }
      fetchData();
    });

    console.log(`This statement logs before newArray has filled with data`);

    return <div className="loading">Loading...</div>;
  } else {
    console.log(`urlsReceived is true`);
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
