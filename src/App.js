import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card";
import characters from "./cards.json"

class App extends Component {
  
  state = {
    characters: characters,
    topScore: 0,
    currentScore:0,
    selectedCharacters: []
  }

  componentDidMount(){

  }

  shuffleCharacters = () =>{
    const ordered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const shuffled = [];
    let chosen, random;

    while(ordered.length > 0){
      random = Math.floor(Math.random() * (ordered.length));
      chosen = ordered.splice(random, 1)[0];
      shuffled.unshift(chosen);
    }
    return shuffled;
  }
  

  selectCharacter = id => {
    this.state.selectedCharacters.push(id);

    const shuffle = this.shuffleCharacters();
    const characters = this.state.characters.map((character, i) => {
      return this.state.characters.find(card => card.id === shuffle[i])
    })
    this.setState({currentScore: this.state.currentScore + 1})
    this.setState({characters: characters})

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
