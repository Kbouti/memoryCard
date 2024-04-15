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

// Ok so apparently something something you can't have a hook called in a conditional - it has to run every time. 
// So I moved this callAPI line up above the conditional. But the problem is now the conditional only runs once and it's always false
// Maybe a while loop instead of if conditional? Naww not liking the while loop. 

  // ************************************************************************************
  let newArray = CallAPI(urlList, setUrlList, photosReceived, setPhotosReceived);

  
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
  }
}
export default MainPage;
