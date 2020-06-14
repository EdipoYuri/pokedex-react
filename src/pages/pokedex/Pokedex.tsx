import React, { useState, useEffect } from 'react';
import { Page, PokeList, LoadMoreButton } from './Styles';
import { getPokemon } from '../../services/services';
import Card from '../../components/Simple Card/Card';

const Pokedex = () => {
  const MAX_PKMN_LOAD = 20;
  const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [loadMoreCount, setLoadMoreCount] = useState(1);
  const [previousValue, setPreviousValue] = useState(1);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    setPreviousValue(MAX_PKMN_LOAD * loadMoreCount);
    setLoadMoreCount(loadMoreCount+1);
    try {
      for (let index = previousValue; index <= MAX_PKMN_LOAD * loadMoreCount; index++) {
        const pokemon = await getPokemon("pokemon", `${index}`);
        await setPokemonList(pokemonList => [...pokemonList, pokemon]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Page>
      <h2>Pokédex</h2>

      <PokeList>
        {isLoading
          ? <div>Loading...</div>
          : pokemonList.map((item, index) =>
            <div key={index}>
              <Card 
                name={item.name} 
                frontImage={item.sprites.front_default} 
                backImage={item.sprites.back_default}
                types={item.types}
              />
            </div>
          )
        }
      </PokeList>
      <LoadMoreButton onClick={() => fetchData()}>Load more</LoadMoreButton>
    </Page>
  )
}

export default Pokedex;