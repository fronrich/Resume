import React from 'react';
// import stylings
import './App.css';
// import components
import Header from './components/Header';
import Social from './components/Social';
import Education from './components/Education';
import Career from './components/Career';
import Personal from './components//Personal'
import Proficiency from './components/Proficiency';
// import data
import Data from './JSONs/Master.json';

function App() {
  return (
    <div className="App">
      <Header 
        title={Data.Name}
        subtitle={Data.Graduation}
      />
      <Social 
        social={Data.Social}
      />
      <Education
        education={Data.Education}
      />
      <Career
        career={Data.Career} 
      />
      <Personal
        personal={Data.Personal}
      />
      <Proficiency 
        proficiency={Data.Proficiency}
        breakAt={2}
      />
    </div>
  );
}

export default App;
