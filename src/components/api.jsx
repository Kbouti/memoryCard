import { useState } from "react";
import "../style.css";

async function CallApi() {
  try {
    console.log(`called from API try`);
    let response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=5jeNgWyeCz9wEcAY4RqoWnk5ls4jayVF&s=cats",
      { mode: "cors" }
    );
    console.log(`response: ${response}`);
    // console.log(`response.json(): ${response.json()}`);
    console.log(` completed try`);
    return response;
  } catch (error) {
    alert(error);
    console.log(error);
  }
}

const response = await CallApi();

// const parsed = JSON.parse(response);
// console.log(`parsed: ${parsed}`);


// console.log(`response.json(): ${response.json()}`);

// const responseURL = response.data.original.url;
// console.log(`responseURL: ${responseURL}`);

//  ************************************************************************************************************************
console.log(`imageSrc: ${response}`);

//  This is coming out as [object Reponse]
//  Can't seem to figure out how to render the giph in the context of jsx components

// I'm almost kinda wondering now if this is a problem with our api call?
// Yeah I think it's the object we're getting back, not how we're handling it. We need to go back to a basic non-react sandbox and render an image with this object to test
//  ************************************************************************************************************************

function GiphyImg(imageSrc) {
  return <img src={imageSrc}></img>;
}

export default GiphyImg;
