declare global {
  type Images = {
    front_default: string,
    front_shiny: string,
    back_default: string,
    back_shiny: string
  }

  type PokemonInfo = {
    id: number,
    name: string,
    sprites: Images,
  }
}

export {}