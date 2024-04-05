import { useState } from "react";
import "../style.css";


async function CallApi() {
    console.log(`called from API component`)

let imageSrc
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=5jeNgWyeCz9wEcAY4RqoWnk5ls4jayVF&s=cats', {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        console.log(response.data.url);
        imageSrc = response.data.images.original.url;
        return imageSrc
    });
//  return imageSrc;
}

const imageSrc = CallApi();


//  ************************************************************************************************************************
console.log(`imageSrc: ${imageSrc}`);
//  This is coming out as [object promise]
//  Can't seem to figure out how to render the giph in the context of jsx components
//  ************************************************************************************************************************


function GiphyImg(imageSrc) {
    return (
        <img src= {imageSrc}></img>
    )
}

export default GiphyImg