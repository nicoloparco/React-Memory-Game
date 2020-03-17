import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card";
import characters from "./cards.json"

class App extends Component {
  
  state = {
    characters,
    topScore: 0,
    currentScore: 0,
    clickMessage
  }

  componentDidMount(){

  }
  
  selectCharacter = id => {
    
    const characters = this.state.characters;
    const clickedMatch = characters.filter(character => character.id === id)

    if(clickedMatch[0].clicked){
      this.gameOver();
    } 
    else if(currentScore < 14) {
      this.continuePlay(clickedmatch)
    } 
    else {
      this.winGame(clickedMatch)
    }
  };

  
  render() {
    
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <div className="container-fluid">
            <div className="row">
              {this.state.characters.map(character => (
              <Card 
              key={character.id}
              image={character.image}
              alt={character.name}
              name={character.name}
              selectCharacter={this.selectCharacter}
              />
              ))}
            </div>
        </div>
      </div>
    );
  }
   
}

export default App;
