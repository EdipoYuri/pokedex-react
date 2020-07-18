import styled from "styled-components"

const handleTypeColor = colors => {
  switch (colors.type.name) {
    case "bug":
      return "#A8B820"
    case "dark":
      return "#705848"
    case "dragon":
      return "#7038F8"
    case "eletric":
      return "#F8D030"
    case "fairy":
      return "#9B6470"
    case "fighting":
      return "#C03028"
    case "fire":
      return "#F08030"
    case "flying":
      return "#A890F0"
    case "ghost":
      return "#493963"
    case "grass": 
      return "#539665"
    case "ground":
      return "#E0C068"
    case "ice":
      return "#98D8D8"
    case "normal":
      return "#A8A878"
    case "poison":
      return "#A040A0"
    case "psychic":
      return "#F85888"
    case "rock":
      return "#B8A038"
    case "steel":
      return "#B8B8D0"
    case "water":
      return "#6890F0"
    default: 
      return "#68A090"
  }
}

export const SimpleCard = styled.div`
  width: 200px;
  height: 200px;

  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;

  border-radius: 10px;
  box-shadow: 3px 3px 3px black;

  cursor: pointer;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  ${props => {
    if(props.types[1] === undefined){
      return `
        background-color: ${handleTypeColor(props.types[0])};
        background-image: url(${props.backImage});
      `
    } else {
      return `
        background-image: 
          url(${props.backImage}), 
          linear-gradient(to right, ${props.types.map((item, index) => {return `${handleTypeColor(item)} 50%`})});                                
      `
    }
  }}

  &:hover {
    ${props => {
      if(props.types[1] === undefined){
        return `background-image: url(${props.frontImage});`
      } else {
        return `
          background-image: 
            url(${props.frontImage}), 
            linear-gradient(to right, ${props.types.map((item, index) => {return `${handleTypeColor(item)} 50%`})});
        `
      }
    }}
  }

  &:after{
    display: none;
    content: url(${props => props.frontImage}) url(${props => props.backImage});
  }

  @media(max-width: 1024px) {
    ${props => {
      if(props.types[1] === undefined){
        return `
          background-color: ${handleTypeColor(props.types[0])};
          background-image: url(${props.frontImage});
        `
      } else {
        return `
          background-image: 
            url(${props.frontImage}), 
            linear-gradient(to right, ${props.types.map((item, index) => {return `${handleTypeColor(item)} 50%`})});                                
        `
      }
    }}
  }

  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const PokeName = styled.h2`
  color: white;
  text-shadow: 2px 2px #000;
  text-transform: capitalize;
`