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
    currentScore:0,
    selectedCharacters: []
  }

  componentDidMount(){

  }

  rearrangeCharacters = array => {
    for(let i = array; i < array.length - 1; i--){
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectCharacter = id => {
    this.state.selectedCharacters.push(id);

    const shuffle = this.shuffleCards();
    const characters = this.state.map((character, i) => {
      return this.state.characters.find(card => card.id === shuffle[i])
    })
    this.setState({characters})

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
