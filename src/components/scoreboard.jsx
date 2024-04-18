import { useState, useEffect } from "react";

function Scoreboard({currentScore, topScore, urlsReceived}) {
if (!urlsReceived){
    return null;
}
return (
    <section className="scoreboard">
        <div className="scoreContainer currentScore">
            <label>Current Score: {currentScore}</label>
        </div>
        <div className="scoreContainer topScore">
            <label>Top Score: {topScore}</label>
        </div>
    </section>

)


}

export default Scoreboard