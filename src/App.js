import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './cat.svg';
import './App.css';

function App() {

  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);
  const [getFact, setGetFact] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios("https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random")
      // console.log(result.data);
      setFact(`${result.data.text}`)
      setLoading(false);
    }
    fetchData();
  }, [getFact])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Random Cat Fact</h1>
        {loading ? <p>Fact is Loading...</p> : <div id="cat-fact-container"><p id="cat-fact">
          {fact}
        </p></div>}
        <button id="get-fact" onClick={() => setGetFact(!getFact)}>Get a new fact !</button>
      </header>
    </div>
  );
}

export default App;
