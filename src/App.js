import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  state = {
    characters: this.shuffleArray(characters),
    selectArr: [],
    score: 0,
    topScore: 0,
    correct: ""
  };

  selectCharacter = id => {
    const isPrevSelected = this.state.selectArr.filter(character => character.id === id);
    if (isPrevSelected.length === 0) {
      if (this.state.score === this.state.topScore) {
        this.setState({ topScore: this.state.topScore + 1 });
      }
      this.setState({ score: this.state.score + 1 });
      const selected = this.state.characters.filter(character => character.id === id);
      this.setState({ selectedArr: this.state.selectArr.push(selected[0]) });
      this.setState({ correct: "You are correct!" });
    } else {
      this.setState({ score: 0 });
      this.setState({ selectArr: [] });
      this.setState({ correct: "You are incorrect!" })
    }
    const characters = this.shuffleArray(this.state.characters);
    this.setState({ characters: characters });
  }

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} topScore={this.state.topScore} correct={this.state.correct}/>
        {this.state.characters.map(character => (
          <CharacterCard
            selectCharacter={this.selectCharacter}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            selected={character.selected}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
