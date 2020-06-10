import React, { useState, useEffect } from 'react';
import { Page, PokeList } from './Styles';
import { getPokemon } from '../../services/services';
import Card from '../../components/Simple Card/Card';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      for (let index = 1; index < 41; index++) {
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
    </Page>
  )
}

export default Pokedex;