import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card";
import cards from "./cards.json"

class App extends Component {
  
  state = {
    characters: cards,
    topScore: 0,
    currentScore: 0
  }
  
  render() {
    console.log(this.state.characters)
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <div className="container-fluid">
            <div className="row">
              {this.state.characters.map(character => (
              <Card 
              image={character.image}
              alt={character.name}
              name={character.name}
              />
              ))}
            </div>
        </div>
      </div>
    );
  }
   
}

export default App;
