import React, {Component} from 'react';

class CharacterForm extends Component{

  constructor(props){
    super(props);
    this.state={
      name: "",
      race: "",
      gender: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleRaceChange = this.handleRaceChange.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({name: event.target.value})
  }

  handleRaceChange(event){
    this.setState({race: event.target.value})
  }

  handleGenderChange(event){
    this.setState({gender: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim();
    const race = this.state.race;
    const gender = this.state.gender;
    if(!name){
      return
    }

    const newCharacter ={
      name: name,
      race: race,
      hitPoints: 100,
      coinPurse: 1000,
      backStory: "New Story",
      strength: 5,
      intelligence:5,
      manaPoints: 50,
      gender: gender
    }

    this.props.onCharacterSubmit(newCharacter);

    this.setState({
      name: "",
      race: "",
      gender: ""
    })

  }


  render(){
    return(
      <form className="character-form" onSubmit={this.handleSubmit}>
        <input type="text"
        placeholder="Name"
        value={this.state.name}
        onChange={this.handleNameChange}
        required
        />

        <select id="race" name="race" value={this.state.race} onChange={this.handleRaceChange}>
          <option value="Dwarf">Dwarf</option>
          <option value="Human">Human</option>
        </select>

        <select id="gender" name="gender" value={this.state.gender} onChange={this.handleGenderChange}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>


        <input type="submit" value="Save"/>
      </form>
    )
  }



}


export default CharacterForm;
