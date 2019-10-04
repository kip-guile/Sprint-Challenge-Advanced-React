import React from 'react';
import './App.css';
import PlayerList from './Components/PlayerList';
import useDarkMode from './Components/useDarkMode';

function App() {
  const [darkMode, toggleMode] = useDarkMode('darkMode', false);

  return (
    <div className="App">
      <button onClick={toggleMode}>Toggle</button>
     <PlayerList/>
    </div>
  );
}

export default App;
