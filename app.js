import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Summary />
        <Experience />
        <Education />
        <Skills />
      </main>
    </div>
  );
}

export default App;
