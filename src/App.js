import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import CardContainer from "./components/CardContainer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <CardContainer />
    </div>
  );
}

export default App;
