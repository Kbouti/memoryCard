import { useState, useEffect } from "react";
import "../style.css";
// import GiphyImg from "./api";
import Scoreboard from "./scoreboard";
// import CallAPI from "./api";

function MainPage() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [urlList, setUrlList] = useState([]);
  const [photosReceived, setPhotosReceived] = useState(false);

  // ************************************************************************************

  // https://www.youtube.com/watch?v=-4XpG5_Lj_o
  // https://www.youtube.com/watch?v=qdCHEUaFhBk
  // ************************************************************************************



  // Game: 
  // establish gameboard
  // establish card
  // render gameboard with 12 cards
  // Each card must get a unique key





  return (
    <>
      <h1>Memory Card</h1>
      {!photosReceived ? <div>Loading cute doggos</div> : <Gameboard />}
    </>
  );
}


export default MainPage;
