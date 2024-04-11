import { useState, useEffect } from "react";

function beginGame() {
    const startupMessage = "Welcome to Memory Card! Click on a dog to cause the board to shuffle. You get a point if you haven't clicked that piece before. You lose if you repeat a click";
    setTimeout(()=> {
    alert(startupMessage);
    }, 500)




    
}


export default beginGame