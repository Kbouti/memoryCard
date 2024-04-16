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

// https://www.youtube.com/watch?v=-4XpG5_Lj_o
// https://www.youtube.com/watch?v=qdCHEUaFhBk
  // ************************************************************************************


let urlArray = [];


useEffect(() => {
  fetch("https://random.dog/woof.json")
  .then(result => {
    return result.json()
  })
  .then(result => {
    let url = result.url;
    console.log(`url: ${url}`);
    if (url.toString().substr(url.toString().length - 3).toLowerCase() == "jpg"){
      console.log(`found a jpg`)
      urlArray.push(url);
    }
    // Ok cool. We've fetched one URl when the page loaded. 

    // Our problem is that we can't call a hook conditionally, or in a loop. 
    // So how do we call this API 12 times  without repeating ourselves???
    //  Seems like we gotta get into promiseAll()
    // https://www.squash.io/executing-multiple-fetch-calls-simultaneously-in-reactjs/
  });
}, [])


return (
  <>
  <h1>Memory Card</h1>
  {!photosReceived ? <div>Loading cute doggos</div> : <Gameboard/>}
  </>
)


}
export default MainPage;
















// let newArray = CallAPI(urlList, setUrlList, photosReceived, setPhotosReceived);

  
// if (!photosReceived) {
//   console.log(`waiting on data`);
//   CallAPI({ urlList, setUrlList, photosReceived, setPhotosReceived });
//   // So here we need to call the api (Or call a function that calls the api???)
//   return <div>Waiting on Data</div>;
// } else if (photosReceived) {
//   console.log(`We got that data! `);
//   return (
//     <>
//       <div>We got that data! </div>
//       <Gameboard urlList={urlList} />
//     </>
//   );
// }