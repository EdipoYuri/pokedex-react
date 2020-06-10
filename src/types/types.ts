declare global {
  type Images = {
    front_default: string,
    front_shiny: string,
    back_default: string,
    back_shiny: string
  }

  type PokeTypes = {
    name: string,
  }

  type PokemonInfo = {
    id: number,
    name: string,
    sprites: Images,
    types: PokeTypes
  }

  type CardInfos = {
    frontImage: string,
    backImage: string,
    name: string,
    types: PokeTypes
  }
}

export {}