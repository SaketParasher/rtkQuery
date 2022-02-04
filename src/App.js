import './App.css';
import Counter from './features/counter/counter';
import FetchPokemon from './features/pokemon/FetchPokemon';
import Caching from './features/pokemon/Caching';
import { useEffect, useState } from 'react';


const pokemon = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur'];

function App() {
  
  const [pollingInterval, setPollingInterval] = useState(0);
  const [cachePoke,setCachePoke] = useState(['bulbasaur']);

  useEffect(() => {
    // add a duplicate bulbasaur - notice there is no second request
    setTimeout(() => {
      setCachePoke(prev => [...prev,'bulbasaur'])
    },1500);

    setTimeout(() => {
      setCachePoke(prev => [...prev,'pikachu'])
    },2000);

  },[])

  return (
    <div className="App">
      <Counter />
      <hr/>
      <h2>RTK Query Polling Example</h2>
      <select onChange={e => setPollingInterval(Number(e.target.value))}>
        <option value={0}>Off</option>
        <option value={1000}>1s</option>
        <option value={5000}>5s</option>
      </select>
      <div>
        {pokemon.map((poke,index) => <FetchPokemon key={index} name={poke} pollingInterval={pollingInterval}/>)}
      </div>
      <hr/>
      <h2>Refetching and Caching</h2>
      <div> <button onClick={e => setCachePoke(prev => [...prev,'bulbasaur'])}>Add Bulbasaur</button></div>
      {cachePoke.map((name,index) => <Caching key={index} name={name} />)}
      <div style={{width:'100%',float:'right'}}><hr/></div>
      <div style={{float:'unset'}}>SEPERATOR</div>
      
    </div>
    
  );
}

export default App;
