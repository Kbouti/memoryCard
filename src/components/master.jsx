import { useState } from "react";
import "../style.css";
import GiphyImg from "./api";
import Clock from "./clock";
import Scoreboard from "./scoreboard";

function MainPage() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);


  return (
    <div className="page">
      <h1>Memory Card Project</h1>
      <Scoreboard currentScore={currentScore} topScore = {topScore}/>
      <GiphyImg />
      <Clock/>
    </div>
  );
}


export default MainPage

// Ok. We've successfully rendered 12 random images from API calls in the GiphyImg component. 
// We need to reOrganize a bit. 
// We need to get the image URL's then make a game tile with each one. 

// We'll render all the game tiles on the first turn, then let the user click one. 
// Then we'll reoeder the tiles and have the user click again. If they click a tile that's already been clicked -- They lose!

// Ideally we fetch all the urls we need in one place, then pass them to a prop ro render the cards?
