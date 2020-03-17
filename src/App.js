import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card";
import characters from "./cards.json"

class App extends Component {
  
  state = {
    characters,
    topScore,
    currentScore,
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
  }

  continuePlay(clickedMatch) {
    
    shake = {}
    clickedMatch[0].clicked = true;
    currentScore ++;
    clickMessage = "Correct! Guess Again"

    if(currentScore > bestScore){
      bestScore = currentScore;
      this.setState({ topScore })
    }

    characters.sort(function(a,b) {
      return 0.5 - Math.random()
    });

    this.setState({ characters });
    this.setState({ currentScore });
    this.setState({ clickMessage })
  }
  
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
