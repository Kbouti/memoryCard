import React from "react";
import { useState, useEffect } from "react";

function Gameboard() {
  function Card({ index }) {
    return (
      <div className="card">
        <p>{index}</p>
      </div>
    );
  }

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

export default Gameboard;
