import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState({});
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    if (sendRequest) {
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1050')
        .then(response => {
          setPokemon(response.data.results)
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
        <p className="mb-1">List of Pokemon: </p>
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
