import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemText from "./components/ListItemText";
import ListItemImg from "./components/ListItemImg";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Pokedex</h1>
        <input className="input" placeholder="Search a Poke" />
      </header>
      <main className="colorful-border">
        <List>
          <ListItem href="#pikachu">
            <ListItemImg
              src="http://pngimg.com/uploads/pokemon/pokemon_PNG146.png"
              alt="pikachu"
            />
            <ListItemText primary="Pikachu" secondary="#001" />
            <div>Icon</div>
          </ListItem>
          <ListItem href="#ivysaur">
            <ListItemImg
              src="http://pngimg.com/uploads/pokemon/pokemon_PNG157.png"
              alt="schiggy"
            />
            <ListItemText primary="Schiggy" secondary="#002" />
            <div>Icon</div>
          </ListItem>
        </List>
      </main>
      <footer>Pokedex</footer>
    </div>
  );
}

export default App;
