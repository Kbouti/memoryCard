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
  function Card({ index, url }) {
    useEffect(() => {
      // Fetch url from API
    });
    return (
      <div className="card">
        <img src={url}></img>
      </div>
    );
  }

  // ************************************************************************************
  // I think we FINALLY made progress!!!!!
  // When this runs we're already gotten our urlList. Right??
  console.log(`urlLIst: ${urlList}`);
  // ************************************************************************************

  return (
    <div className="gameboard">
      <Card index="1" url = {urlList[0]}/>
      <Card index="2" url = {urlList[1]}/>
      <Card index="3" url = {urlList[2]}/>
      <Card index="4" url = {urlList[3]}/>
      <Card index="5" url = {urlList[4]}/>
      <Card index="6" url = {urlList[5]}/>
      <Card index="7" url = {urlList[6]}/>
      <Card index="8" url = {urlList[7]}/>
      <Card index="9" url = {urlList[8]}/>
      <Card index="10" url = {urlList[9]}/>
      <Card index="11" url = {urlList[10]}/>
      <Card index="12" url = {urlList[11]}/>
    </div>
  );
}

export default Gameboard;
