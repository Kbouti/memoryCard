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
console.log(` completed try`);
return response

  } catch (error) {
    alert(error);
    console.log(error);
  }
}

const response = await CallApi();

// const responseURL = response.data.original.url;

//  ************************************************************************************************************************
console.log(`imageSrc: ${response}`);

//  This is coming out as [object Reponse]
//  Can't seem to figure out how to render the giph in the context of jsx components

// I'm almost kinda wondering now if this is a problem with our api call?
//  ************************************************************************************************************************

function GiphyImg(imageSrc) {
  return <img src={imageSrc}></img>;
}

export default GiphyImg;
