import { useState, useEffect } from "react";
import "../style.css";
// import GiphyImg from "./api";
import Clock from "./clock";
import Scoreboard from "./scoreboard";
import Gameboard from "./gameboard";

function MainPage() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);


  const [imageURL1, setImageURL1] = useState("");
  const [imageURL2, setImageURL2] = useState("");
  const [imageURL3, setImageURL3] = useState("");
  const [imageURL4, setImageURL4] = useState("");
  const [imageURL5, setImageURL5] = useState("");
  const [imageURL6, setImageURL6] = useState("");
  const [imageURL7, setImageURL7] = useState("");
  const [imageURL8, setImageURL8] = useState("");
  const [imageURL9, setImageURL9] = useState("");
  const [imageURL10, setImageURL10] = useState("");
  const [imageURL11, setImageURL11] = useState("");
  const [imageURL12, setImageURL12] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      let urlList = [];

      while (urlList.length < 13) {
        console.log(`iteration`)
        console.log(`urlList.length: ${urlList.length}`);
        const result = await fetch("https://random.dog/woof.json");
        result.json().then((json) => {
          const toString = json.url.toString();
          let last3 = toString.substr(toString.length - 3);
          last3 = last3.toLowerCase();
          if (last3 == "jpg") {
            urlList.push(json.url);
            console.log(`Added a photo to the list`);
          }
        });
      }
      setImageURL1(urlList[0]);
      setImageURL2(urlList[1]);
      setImageURL3(urlList[2]);
      setImageURL4(urlList[3]);
      setImageURL5(urlList[4]);
      setImageURL6(urlList[5]);
      setImageURL7(urlList[6]);
      setImageURL8(urlList[7]);
      setImageURL9(urlList[8]);
      setImageURL10(urlList[9]);
      setImageURL11(urlList[10]);
      setImageURL12(urlList[11]);
    };

    fetchData();
  }, []);






  return (
    <div className="page">
      <h1>Memory Card Project</h1>
      <Scoreboard currentScore={currentScore} topScore = {topScore}/>
      <Gameboard
      imageURL1 ={imageURL1}
      imageURL2 ={imageURL2}
      imageURL3 ={imageURL3}
      imageURL4 ={imageURL4}
      imageURL5 ={imageURL5}
      imageURL6 ={imageURL6}
      imageURL7 ={imageURL7}
      imageURL8 ={imageURL8}
      imageURL9 ={imageURL9}
      imageURL10 ={imageURL10}
      imageURL11 ={imageURL11}
      imageURL12 ={imageURL12}
      />
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
