import React, {useState} from 'react';
import Navigation from './components/Nav'
import Projects from "./components/Projects";
import About from './components/About'
import Contact from './components/Contact'



function App() {
  const [currentPage, setPage] = useState('About Me');

  const page = () => {
    switch (currentPage) {
      case 'About Me': 
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact': 
        return <Contact />
    }

  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setPage={setPage}/>

      <main>
        {page()}
      </main>
    </div>
  );
}

export default App;
