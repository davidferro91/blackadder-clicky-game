import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="card title indigo lighten-3" style={{ height: "auto" }}>
      <h3 className="title black-text">Blackadder Clicky Game</h3>
      <h5 className="card-content title black-text">I have a cunning plan!  Click on each Blackadder character from the series, but only once!  If you click on someone twice, you lose and the game starts over.</h5>
      <h4 className="card-content title">{props.correct}</h4>
      <h4 className="card-content title"> Score: {props.score} | Top Score: {props.topScore} </h4>
    </div>
  );
}

export default Title;