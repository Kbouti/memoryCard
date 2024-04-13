import { useState, useEffect } from "react";
import "../style.css";
// import GiphyImg from "./api";
import Clock from "./clock";
import Scoreboard from "./scoreboard";
import Gameboard from "./gameboard";
import callAPI from "./api";




function MainPage() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [urlList, setUrlList] = useState([]);
  const [photosReceived, setPhotosReceived] = useState(false);

  // ******************************************************************************
  // ******************************************************************************
  // We're going about this wrong. We can make this easier.
  // MainPage is master. establish all necessary props here.

  //    if (!photosReceived){
  //      <p>loading please wait</p>
  //    else
  //    <Gameboard/>
  //    }
  // ******************************************************************************
  // ******************************************************************************
  if (!photosReceived) {
    console.log(`waiting on data`);
    callAPI({photosReceived, setPhotosReceived})
// So here we need to call the api (Or call a function that calls the api???)
    return <div>Waiting on Data</div>;
  } else {
    console.log(`We got that data! `);
    return <div>We got that data! </div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      let newArray = [];
      while (newArray.length < 12) {
        const result = await fetch("https://random.dog/woof.json");
        result.json().then((json) => {
          const toString = json.url.toString();
          let last3 = toString.substr(toString.length - 3);
          last3 = last3.toLowerCase();
          if (last3 == "jpg") {
            newArray.push(json.url);
            console.log(`Added a suitable url (${newArray.length})`);
          }
        });
      }

      console.log(`newArray is long enough.Length: ${newArray.length}`);
      setUrlList(newArray);
    };
    fetchData();

    // return () => {
    // Cleanup function??
    // }
  }, []);

  return (
    <div className="page">
      <h1>Memory Card</h1>
      <Scoreboard currentScore={currentScore} topScore={topScore} />
      <Gameboard urlList={urlList} />
      <Clock />
    </div>
  );
}

export default MainPage;

//  We're now calling the api 12 times in master, then passing our url objects to gameboard where we can make the cards.
