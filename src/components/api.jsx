import { useState, useEffect } from "react";
import "../style.css";

function GiphyImg() {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://random.dog/woof.json");
      result.json().then(json => {
        console.log(`json: ${json}`);
        let newResult = JSON.stringify(json);
        console.log(`newResult: ${newResult}`);
        console.log(json.url)
        setImageURL(json.url);
      })
    };
    fetchData();
  }, []);

  return <img src={imageURL}></img>;
}

export default GiphyImg;

// Random dog photo rendered! 