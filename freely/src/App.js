import React from 'react';
import './App.css';
import Route from "react-router-dom";

/* Component Imports */
import Navigation from "./component/navigation/index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        {/* <Route exact path = "/" component = {} />
        <Route path = "/login" component = {} />
        <Route path = "/relax" component = {} /> */}
      </main>

      {/* <footer>
        Icons made by
        <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
        from
        <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a>
        is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
      </footer> */}
    </div>
  );
}

export default App;
