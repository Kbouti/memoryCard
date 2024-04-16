import { useState, useEffect } from "react";

function Gameboard({urlList}) {

//  I think we want to put our event listeners in here as an anonymous function???

console.log(`Gameboard component called`);

// 

  return( <div className="gameboard">
<h2>gameboard</h2>
  </div>);
}

export default Gameboard;






// const gameCards = [];
// for (let i = 0;i < 12;i++){
//     let urlText = urlList[i];
//     let key = i;
//     gameCards.push(
//     <div className="gameCard" key = {key}>
//         <img className="dogPic" src= {urlText} alt="random dog picture"></img>
//     </div>)
// }

