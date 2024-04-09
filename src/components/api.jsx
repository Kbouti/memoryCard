import { useState, useEffect } from "react";
import "../style.css";

function GiphyImg() {
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

      for (let i = 0; i < 20; i++) {
        const result = await fetch("https://random.dog/woof.json");
        result.json().then((json) => {

          console.log(`url result: ${json.url}`);
          // console.log(`to string? ${json.url.toString()}`);
          const toString = json.url.toString();
           let last3 = toString.substr(toString.length - 3);
           console.log(`last3: ${last3}`);
          last3 = last3.toLowerCase();
          console.log(`last3: ${last3}`);

          if (last3 == "jpg"){
            urlList.push(json.url);
          }

        }).catch((error) => {
          console.log(error);
          alert(error);
          // This seems to work ok but it's not actually loggin an error
        });
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
      }
    };
    fetchData();
  }, []);

  return (

      <div className="cardContainer">
        <img className="dogPic" src={imageURL1} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL2} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL3} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL4} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL5} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL6} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL7} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL8} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL9} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL10} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL11} alt="Random dog picture"></img>
        <img className="dogPic" src={imageURL12} alt="Random dog picture"></img>
      </div>

  );
}

export default GiphyImg;

// We're now calling the api 20 times (which is wasteful) but we're only adding the picture to our array if it's a jpg

// Maybe a better way to do it would be to establish the array, then while the length is less than n call the api...... We could also allow the user to pick the length to change difficulty
