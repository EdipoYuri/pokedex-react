import React from "react"
import { SimpleCard, PokeName } from "./Styles"

const Card = (props: CardInfos) => {
  return (
    <SimpleCard 
      frontImage={props.frontImage} 
      backImage={props.backImage}
      types={props.types}
      onClick={() => alert("Em breve :)")}
    >
      <PokeName>{props.name}</PokeName>
    </SimpleCard>
  )
}

export default Card