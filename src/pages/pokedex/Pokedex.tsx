import React, { useState, useEffect } from 'react'
import { 
  Page,
  PokeList, 
  LoadMoreButton, 
  SearchBar,
  SearchInput, 
  SearchButton 
} from './Styles'
import { getPokemon } from '../../services/services'
import Card from '../../components/Simple Card/Card'



const Pokedex = () => {
  const MAX_LOAD = 20

  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    SearchPokemon(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  async function SearchPokemon(isSearch: boolean) {
    setIsLoading(true)
    setSearchText('')
    if(isSearch){
      if(searchText === ''){
        SearchPokemon(false)
      }else{
        const pokemon = await getPokemon('pokemon', searchText)
        pokemon === undefined ? setPokemonList([]) : await setPokemonList([pokemon])
      }
    }else{
      for (let index = pokemonList.length + 1; index < pokemonList.length + MAX_LOAD; index++) {
        const pokemon = await getPokemon('pokemon', `${index}`)
        await setPokemonList(pokemonList => [...pokemonList, pokemon])
      }
    }
    setIsLoading(false)
  }

  return (
    <Page>
      <SearchBar>
        <SearchInput
          name="searchBox"
          type="text"
          placeholder="Insert pokémon name or ID..."
          onChange={e => setSearchText(e.target.value)}
          value={searchText}
        />

        <SearchButton
          name="searchButton"
          onClick={e => {
            SearchPokemon(true)
            e.preventDefault()
          }}
          disabled={searchText === '' ? true : false}
        >
          Search
        </SearchButton>
      </SearchBar>

      <PokeList>
        {isLoading 
          ? <div>Loading...</div> 
          : pokemonList.length
            ? pokemonList.map((item, index) =>
              <div key={index}>
                <Card 
                  name={item.name} 
                  frontImage={item.sprites.front_default} 
                  backImage={item.sprites.back_default}
                  types={item.types}
                />
              </div>
            )
            : <div>Pokémon not found :/</div>
        }
      </PokeList>

      <LoadMoreButton onClick={() => {SearchPokemon(false)}}>
        {pokemonList.length >= MAX_LOAD - 1 ? 'Load more' : 'Reset search'}
      </LoadMoreButton>
    </Page>
  )
}

export default Pokedex