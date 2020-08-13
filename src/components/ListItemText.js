import React from "react";

function ListItemText({ primary, secondary }) {
  return (
    <div>
      <span>{primary}</span>
      <p>{secondary}</p>
    </div>
  );
}

export default ListItemText;

//<ListItemText primary="Bulbasaur" secondary="#001" />
