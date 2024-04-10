import { useState, useEffect } from "react";

function Gameboard({
  imageURL1,
  imageURL2,
  umageURL3,
  imageURL4,
  imageURL5,
  imageURL6,
  imageURL7,
  imageURL8,
  imageURL9,
  imageURL10,
  imageURL11,
  imageURL12,
}) {
  //  So we have our gameboard component. Buuuut we'll need to access our URL's if we wanna render our cards

  return <div className="gameboard">
    <img src={imageURL1} alt="Random dog pic" />
  </div>;
}

export default Gameboard;
