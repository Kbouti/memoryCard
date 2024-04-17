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

  const fetchRequest1 = fetch("https://random.dog/woof.json");
  const fetchRequest2 = fetch("https://random.dog/woof.json");
  const fetchRequest3 = fetch("https://random.dog/woof.json");
  const fetchRequest4 = fetch("https://random.dog/woof.json");
  const fetchRequest5 = fetch("https://random.dog/woof.json");
  const fetchRequest6 = fetch("https://random.dog/woof.json");
  const fetchRequest7 = fetch("https://random.dog/woof.json");
  const fetchRequest8 = fetch("https://random.dog/woof.json");
  const fetchRequest9 = fetch("https://random.dog/woof.json");
  const fetchRequest10 = fetch("https://random.dog/woof.json");
  const fetchRequest11 = fetch("https://random.dog/woof.json");
  const fetchRequest12 = fetch("https://random.dog/woof.json");
  const fetchRequest13 = fetch("https://random.dog/woof.json");
  const fetchRequest14 = fetch("https://random.dog/woof.json");
  const fetchRequest15 = fetch("https://random.dog/woof.json");
  const fetchRequest16 = fetch("https://random.dog/woof.json");

  let urlArray = [];

  useEffect(() => {
    Promise.all([
      fetchRequest1,
      fetchRequest2,
      fetchRequest3,
      fetchRequest4,
      fetchRequest5,
      fetchRequest6,
      fetchRequest7,
      fetchRequest8,
      fetchRequest9,
      fetchRequest10,
      fetchRequest11,
      fetchRequest12,
      fetchRequest13,
      fetchRequest14,
      fetchRequest15,
      fetchRequest16,
    ]).then((responses) => {
      console.log(`First response from promiseAll: ${responses}`);
      const [
        response1,
        response2,
        response3,
        response4,
        response5,
        response6,
        response7,
        response8,
        response9,
        response10,
        response11,
        response12,
        response13,
        response14,
        response15,
        response16,
      ] = responses;
      for (let i = 0; i < responses.length; i++) {
        // console.log(`responses[i]: ${responses[i]}`);
        // It's skipping straight from the above console.log to the "loop complete" console.log.
        // This is because .json.then() is a promise, so it asks for a response then moves all the way on to the end.
        responses[i].json().then((response) => {
          let targetUrl = response.url;
          console.log(`target ${i} url: ${targetUrl}`);
          const string = targetUrl.toString();
          let last3 = string.substr(string.length - 3);
          last3 = last3.toLowerCase();
          if (last3 == "jpg" || last3 == "png") {
            urlArray.push(targetUrl);
            console.log(`added a suitable url. New length: ${urlArray.length}`);
            // Here we have obtained the URL we're looking for!! And added it to the list
            // There is however a strange error message Response.json: Body has already been consumed
          }
        });
      }
      console.log(`Suitable urls: ${urlArray.length}`);
      // When this code ^^ runs the loop has NOT yet complete.... Because it's waiting for all the promises to return
      setTimeout(() => {
        console.log(`Set timeout. Suitable urls: ${urlArray.length}`);
              // When this code ^^ runs the loop has completed, but only because we gave it time to. 

      }, 1000);
    });


    return ()=>{
      console.log(`unMount cleanup function`)
    }
  }, []);

  return (
    <>
      <h1>Memory Card</h1>
      {!photosReceived ? <div>Loading cute doggos</div> : <Gameboard />}
    </>
  );
}
export default MainPage;
