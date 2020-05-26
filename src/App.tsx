import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { getPokemon } from './services/services';
import Navbar from './components/Navbar/Navbar';
import Pokedex from './pages/pokedex/Pokedex';
import About from './pages/about/About'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
`

function App() {
  const [pokemon, setPokemon] = useState<PokemonInfo[]>([]);

  const showPokemonName = async () => {
    const pokeInfo = await getPokemon('pokemon', '1');
    await setPokemon(pokeInfo);
  }

  return (
    <Router>
      <Container>
        <Navbar />

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route exact path='/'>
            <Pokedex />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
