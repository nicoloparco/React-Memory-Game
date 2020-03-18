import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card";
import characters from "./cards.json"

let currentScore = 0;
let topScore = 0;
let clickMessage = "";
let shake;

class App extends Component {
  
  state = {
    characters,
    topScore,
    currentScore,
    clickMessage
  }
  
  selectCharacter = id => {
    
    const characters = this.state.characters;
    const clickedMatch = characters.filter(character => character.id === id)
    console.log(clickedMatch)
   

    if (clickedMatch[0].clicked){
      this.gameOver();
    } 
    else if (currentScore < 13) {
      this.continuePlay(clickedMatch)
    } 
    else {
      this.winGame(clickedMatch)
    }
  };

  gameOver() {
    shake = {
      animation: "shake .5s .0125s"
    }
    currentScore = 0;
    clickMessage = "Game Over, You Lose"
    characters.map((character, i) => {
      return characters[i].clicked = false;
    })

    this.setState({ clickMessage });
    this.setState({ currentScore });
    this.setState({ characters });
  };

  continuePlay(clickedMatch) {
    
    shake = {}
    clickedMatch[0].clicked = true;
    currentScore ++;
    clickMessage = "Correct! Guess Again"

    if(currentScore > topScore){
      topScore = currentScore;
      this.setState({ topScore })
    }

    characters.sort(function(a,b) {
      return 0.5 - Math.random()
    });

    this.setState({ characters });
    this.setState({ currentScore });
    this.setState({ clickMessage })
  };

  winGame(clickedMatch) {

    clickedMatch[0].clicked = true;
    currentScore = 0;
    clickMessage = "Congrats, You've Won the Game!";
    topScore = 13;
    this.setState({ topScore });

    characters.map((character, i) => {
      return characters[i].clicked = false
    });

    characters.sort(function(a,b) {
      return 0.5 - Math.random() 
    });

    this.setState({ characters });
    this.setState({ currentScore });
    this.setState({ clickMessage });
  };
  
  render() {
    
    return (
      <div className="App">
        <Navbar />
        <Jumbotron 
        currentScore={this.state.currentScore}
        />
        <div className="container-fluid">
            <div className="row" style={shake}>
              {this.state.characters.map(character => (
              <Card 
              key={character.id}
              id={character.id}
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
