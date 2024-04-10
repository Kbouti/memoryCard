import { useState, useEffect } from "react";

function Gameboard({urlList}) {


const gameCards = [];
for (let i = 0;i < 12;i++){
    let urlText = urlList[i];
    let key = i;
    gameCards.push(
    <div className="gameCard" key = {key}>
        <img src= {urlText} alt="random dog picture"></img>
    </div>)
}



  return <div className="gameboard">
{gameCards}
  </div>;
}

export default Gameboard;
