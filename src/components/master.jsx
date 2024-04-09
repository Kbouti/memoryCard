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

// Ok. We've successfully rendered 12 random images from API calls in the GiphyImg component. 
// We need to reOrganize a bit. 
// We need to get the image URL's then make a game tile with each one. 

// We'll render all the game tiles on the first turn, then let the user click one. 
// Then we'll reoeder the tiles and have the user click again. If they click a tile that's already been clicked -- They lose!