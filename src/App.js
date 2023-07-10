import { useState } from 'react';
import './App.css';

function App() {
  const [pokeList, setPokemon] = useState([]);

  const getPokeList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then(response => {
      return response.json();
    }).then(response =>{
      // console.log(response)
      setPokemon(response.results);
    }).catch(err=>{
      console.log(err);
    })
  }
  // console.log(pokeList)
  return (
    <div className="App">
      {pokeList.length==0?<button onClick={getPokeList}>List 807 Pokemon!</button>:<></>}
      <div>
        <ul>
        {pokeList.length > 0 && pokeList.map((pokemon, index) => {
          return (<li key={index+1}>{index+1} - {pokemon.name}</li>)
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
