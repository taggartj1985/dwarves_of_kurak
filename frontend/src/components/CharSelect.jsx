import React from 'react';

const CharSelect = (props) => {

  if(!props.characters) return null

  const options = props.characters.map((character, index) => {
    if (
      character.selectedDropdown === undefined || props.index === character.selectedDropdown
    ) {
      return (
        <option value={character.name} key={index}>
        {" "}
        {character.name}
        </option>
      );
    }
  });

  if(!props.character){
    return (
      <div className="party_character_select_box">

      <p>characterBox</p>

      <select onChange={(id)=>props.onHandleChange(id.target.value)} defaultValue="default">
      <option disabled value="default">Choose a playable character</option>
      {options}
      </select>

      </div>
    )
  } else{
    return (
      <div className="party_character_select_box">
      <p> character selected</p>
      <p>{props.character.name}</p>
      </div>
    )
  }
}
export default CharSelect;
