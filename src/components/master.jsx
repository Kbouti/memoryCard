import { useState } from "react";
import "../style.css";
import GiphyImg from "./api";
import Clock from "./clock";

function MainPage() {
  return (
    <>
      <h1>Memory Card Project</h1>
      <GiphyImg />
      <Clock/>
    </>
  );
}


export default MainPage