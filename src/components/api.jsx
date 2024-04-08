import { useState, useEffect } from "react";
import "../style.css";

let imageURL = null;

async function CallApi() {
  fetch("https://random.dog/woof.json", { mode: "cors" }).then(function (
    response
  ) {
    console.log(`response: ${response}`);
    console.log(`response.json(): ${response.json()}`);
    return response;
  });
}
async function getResponse(){
  const response  = await CallApi()
  console.log(`response from callApi: ${response}`);
  return response
}

imageURL = getResponse();
console.log(`imageURL: ${imageURL}`)

// const parsed = JSON.parse(response);
// console.log(`parsed: ${parsed}`);

// console.log(`response.json(): ${response.json()}`);

// const responseURL = response.data.original.url;
// console.log(`responseURL: ${responseURL}`);

//  ************************************************************************************************************************

//  This is coming out as [object Reponse]
//  Can't seem to figure out how to render the giph in the context of jsx components

// I'm almost kinda wondering now if this is a problem with our api call?
// Yeah I think it's the object we're getting back, not how we're handling it. We need to go back to a basic non-react sandbox and render an image with this object to test

// DO I need to be using useEffect????

//  ************************************************************************************************************************

function GiphyImg(imageSrc) {
  return <img src={imageSrc}></img>;
}

export default GiphyImg;
