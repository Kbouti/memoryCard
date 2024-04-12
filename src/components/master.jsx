import { useState, useEffect } from "react";
import "../style.css";
// import GiphyImg from "./api";
import Clock from "./clock";
import Scoreboard from "./scoreboard";
import Gameboard from "./gameboard";

function MainPage() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [urlList, setUrlList] = useState([]);

  

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