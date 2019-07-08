import React from 'react';
import './App.css';

/* Component Imports */
import Navigation from "./component/navigation/index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        Hero content
      </main>
    </div>
  );
}

export default App;
