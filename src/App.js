import React from 'react';
import Navbr from './components/Nav'
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbr />

      <main>
        <Projects />
      </main>
    </div>
  );
}

export default App;
