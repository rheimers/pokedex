import React from "react";
import "./ListItemText.css";

function ListItemText({ primary, secondary }) {
  return (
    <div className="listItemText">
      <h2>{primary}</h2>
      <p>{secondary}</p>
    </div>
  );
}

export default ListItemText;

//<ListItemText primary="Bulbasaur" secondary="#001" />
