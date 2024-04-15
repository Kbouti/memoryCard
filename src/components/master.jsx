import { useState, useEffect } from "react";
import "../style.css";
// import GiphyImg from "./api";
import Clock from "./clock";
import Scoreboard from "./scoreboard";
import Gameboard from "./gameboard";
import CallAPI from "./api";

function MainPage() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [urlList, setUrlList] = useState([]);
  const [photosReceived, setPhotosReceived] = useState(false);

  // ************************************************************************************
  // We're now displaying a loading message until we get the data, that's a good start.
  // The error we're getting now is: "Rendered fewer hooks than expected. This may be caused by an early return statement"
  // I think this might have to do with using useEffect with a loop. They say you can't call hooks inside loops, conditions, or nested callbacks
  // ************************************************************************************

  if (!photosReceived) {
    console.log(`waiting on data`);
    CallAPI({ urlList, setUrlList, photosReceived, setPhotosReceived });
    // So here we need to call the api (Or call a function that calls the api???)
    return <div>Waiting on Data</div>;
  } else if (photosReceived) {
    console.log(`We got that data! `);
    return (
      <>
        <div>We got that data! </div>
        <Gameboard urlList={urlList} />
      </>
    );
  } else {
    alert(
      `error, photosReceived neither true or false. value: ${photosReceived}`
    );
  }
}
export default MainPage;
