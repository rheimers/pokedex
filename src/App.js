import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="app">
      <header>
        Pokedex <input />
      </header>
      <main>
        <List></List>
      </main>
      <footer>Pokeworld</footer>
    </div>
  );
}

export default App;
