import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemText from "./components/ListItemText";
import ListItemImg from "./components/ListItemImg";
import fetchPokemons from "./api/pokemon";
import Loading from "./components/Loading";

function waitFor(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function App() {
  const [pokeDexList, setPokeDexList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const pokemons = await fetchPokemons();
      setPokeDexList(pokemons);
      await waitFor(3000);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return isLoading ? (
    <Loading>Hallo</Loading>
  ) : (
    <div className="app">
      <header>
        <h1>Pokedex</h1>
        <input className="input" placeholder="Search a Poke" />
      </header>
      <main className="colorful-border">
        <List>
          {pokeDexList?.map((pokemon) => (
            <ListItem key={pokemon.name} href={pokemon.link}>
              <ListItemImg
                src={pokemon.imgSrc}
                alt={`Picture of ${pokemon.name}`}
              />
              <ListItemText
                primary={pokemon.name}
                secondary={`#${pokemon.id}`}
              />
            </ListItem>
          ))}
        </List>
      </main>
      <footer>Pokedex</footer>
    </div>
  );
}

export default App;
