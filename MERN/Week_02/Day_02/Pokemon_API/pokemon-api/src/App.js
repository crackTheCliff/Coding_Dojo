import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState({});
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    if (sendRequest) {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => response.json())
        .then(response => {
          setPokemon(response.results)
        })
        .catch()
      setSendRequest(false);
    }
  }, [sendRequest]);

  const onClick = (e) => {
    setSendRequest(true)
  }

  return (
    <div className="App bg-dark p-3">
      <div className="w-25 mt-2 mx-auto">
        <button className="btn btn-secondary mb-3" onClick={onClick}> Fetch Pokemon</button>
        <h4 className="mb-3">List of Pokemon: </h4>
        <ol>
          {pokemon.length > 0 && pokemon.map((pokemon, index) =>
            <li key={index}>{pokemon.name}</li>
          )}
        </ol>
      </div>
    </div>
  );
}

export default App;