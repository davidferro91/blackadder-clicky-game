import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card hoverable z-depth-5 col s6 m4" onClick={() => props.selectCharacter(props.id)}>
      <div className="img-container indigo accent-3">
        <img alt={props.name} src={window.location.origin + props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;
